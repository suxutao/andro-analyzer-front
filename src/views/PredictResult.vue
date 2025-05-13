<script setup>
import preDataStore from '@/stores/preData';
import { ElMessage } from 'element-plus';
const data = preDataStore()
const clearData = () => {
  data.show = false
  ElMessage.success('成功清除数据')
}
import { sfcgService } from '@/api/user';
import { ref } from 'vue';
const imageURL = ref('/temp_sensitive.png')
const sfcg = async () => {
  ElMessage.info('开始渲染函数调用图')
  imageURL.value = '/'
  const response = await sfcgService()
  imageURL.value = '/' + response.data.url
  ElMessage.success(response.msg)
}
const tableRowClassName = ({
  row,
  rowIndex,
}) => {
  return row.level === 'dangerous' ? 'warning-row' : ''
}
</script>

<template>
  <el-card style="width: 1100px; transform: translateX(-100px);">
    <h1 style="text-align: center;">{{ data.data.软件名 }}软件分析报告</h1>
    <el-descriptions title="应用基本信息" border column="1">
      <el-descriptions-item label="应用名称">
        <el-tag>{{ data.data.软件名 }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="图标"><el-image style="width: 200px; height: 200px" :src="data.data.图标" />
      </el-descriptions-item>
      <el-descriptions-item label="包名">{{ data.data.包名 }}</el-descriptions-item>
      <el-descriptions-item label="主Activity">{{ data.data.主Activity }}</el-descriptions-item>
      <el-descriptions-item label="版本">
        {{ data.data.版本名称 }} ({{ data.data.版本号 }})
      </el-descriptions-item>
      <el-descriptions-item label="SDK版本">
        min: {{ data.data.最小SDK版本 }} / target: {{ data.data.目标SDK版本 }}
      </el-descriptions-item>
    </el-descriptions>

    <!-- 模型预测结果 -->
    <el-descriptions title="分析结果" border column="1">
      <el-descriptions-item label="完整函数调用图节点数"><el-tag type="info">{{ data.data.完整节点数 }}</el-tag></el-descriptions-item>
      <el-descriptions-item label="敏感函数调用图节点数">
        <el-tag type="danger">{{ data.data.敏感节点数 }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="预测结果">
        <el-tag :type="data.data.预测结果 == '良性软件' ? 'success' : 'danger'" size="large">{{ data.data.预测结果 }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>

    <el-collapse class="analysis-sections">
      <!-- 权限列表 -->
      <el-collapse-item title="软件权限列表（点击展开）" name="permissions">
        <el-table :data="data.data.权限列表" height="300" :row-class-name="tableRowClassName">
          <el-table-column prop="permission" label="权限名称" width="400" />
          <el-table-column prop="level" label="危险等级" width="120">
            <template #default="{ row }">
              <el-tag :type="row.level === 'dangerous' ? 'danger' : 'success'" effect="dark">
                {{ row.level }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="label" label="权限标签" />
        </el-table>
      </el-collapse-item>

      <!-- 活动列表 -->
      <el-collapse-item title="软件Activity列表（点击展开）" name="activities">
        <el-table :data="data.data.活动列表" height="200">
          <el-table-column label="Activity 类名">
            <template #default="{ row }">
              {{ row }}
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <!-- 服务列表 -->
      <el-collapse-item title="软件服务列表（点击展开）" name="services">
        <el-table :data="data.data.服务列表" height="200">
          <el-table-column label="服务名称">
            <template #default="{ row }">
              {{ row }}
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>

    <div class="demo-image">
      <div class="block">
        <span class="demonstration">完整函数调用图</span>
        <el-image src="/temp_complete.png" style="width: 500px !important;" lazy>
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
      </div>
      <div class="block">
        <span class="demonstration">敏感函数调用图</span>
        <el-image :src="imageURL" lazy style="width: 500px !important;">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </div>

    <!-- <el-button type="primary" @click="sfcg" style="margin-top: 20px;">重新生成函数调用图</el-button> -->
    <!-- <el-button type="danger" @click="clearData" style="margin:auto;margin-top: 20px;">关闭数据页面</el-button> -->
  </el-card>
</template>



<style scope>
.danger-perm {
  color: #F56C6C;
  font-weight: bold;
}

.analysis-sections {
  margin-top: 20px;
}

.el-descriptions {
  margin-bottom: 20px;
}


.demo-image .block {
  padding: 10px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}

.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
}

el-image {
  padding: 0 5px;
  width: 500px;
}

.demo-image .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120%;
  height: 120%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.demo-image .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
</style>