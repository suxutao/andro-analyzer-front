<script setup>

const downloadFile = (fileName) => {
  const link = document.createElement('a')
  link.href = fileName // public目录下的路径
  link.download = fileName
  link.click()
}
</script>

<template>
  <el-card class="app-analysis">
    <h1 style="text-align: center;">训练结果</h1>
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration">准确率</span>
        <el-image src="/Accuracy.png">
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
      <div class="block">
        <span class="demonstration">精确率</span>
        <el-image src="/Precision.png">
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
      <div class="block">
        <span class="demonstration">召回率</span>
        <el-image src="/Recall.png">
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
      <div class="block">
        <span class="demonstration">F1分数</span>
        <el-image src="/F1-score.png">
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
    <el-button type="primary" style="margin-top: 20px;"
      @click="downloadFile('/default-CIC-2CIC_8000ModelAP_256_0.0001_0.7_model.pt')">下载完整模型</el-button>
    <el-button type="primary" style="margin-top: 20px;"
      @click="downloadFile('/default-CIC-2CIC_8000ModelAP_256_0.0001_0.7_state.pt')">下载模型权重</el-button>
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

.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}

.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
}

.demo-image__placeholder .el-image {
  padding: 0 5px;
  max-width: 400px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>