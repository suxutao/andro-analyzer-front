<script setup>
import { ref } from 'vue'
import HistoryDataVue from './HistoryData.vue'
import { ElMessage } from 'element-plus'
import preDataStore from '@/stores/preData';
import { historyStore } from '@/stores/history';

const data = preDataStore()
const history = historyStore()
// 模拟数据
const dialogVisible = ref(false)

const handleDetail = (rowIndex) => {
    console.log('当前行数据:', rowIndex)
    data.data = history.dataList[rowIndex]
    dialogVisible.value = true
}
const handleDelete = (rowIndex) => {
    console.log('当前行数据:', rowIndex)
    history.deleteItem(rowIndex)
    ElMessage.success('成功清除该条历史记录')
}
const handleDeleteAll = () => {
    history.deleteAll()
    ElMessage.success('成功清除所有历史记录')
}
const tableRowClassName = ({
    row,
    rowIndex,
}) => {
    if (history.dataList[rowIndex].预测结果 !== '良性软件') {
        return 'danger-row'
    } else {
        return 'success-row'
    }
}
</script>

<template>
    <el-dialog v-model="dialogVisible" width="1100" style="margin-left: 300px;">
        <HistoryDataVue></HistoryDataVue>
    </el-dialog>
    <div class="header-container">
        <h1>软件预测历史记录</h1>
        <el-button type="danger" @click="handleDeleteAll">删除所有历史记录</el-button>
    </div>
    <el-table :data="history.dataList" style="width: 100%" border :row-class-name="tableRowClassName">
        <el-table-column prop="软件名" label="软件名" width="200" />
        <el-table-column prop="hash" label="md5" />
        <el-table-column label="分类结果" width="175">
            <template #default="scope">
                <el-tag :type="scope.row.预测结果 == '良性软件' ? 'success' : 'danger'" size="large">{{ scope.row.预测结果
                    }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="175">
            <template #default="scope">
                <el-button type="primary" @click="handleDetail(scope.$index)">
                    详情
                </el-button>
                <el-button type="danger" @click="handleDelete(scope.$index)">
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style>
.box-card {
    margin: 20px;
}

.card-header {
    font-size: 18px;
    font-weight: bold;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    /* 可选：增加容器内边距 */
}

.header-container h1 {
    margin-left: 350px;
}

.el-table .danger-row {
    --el-table-tr-bg-color: var(--el-color-danger-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>