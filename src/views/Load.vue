<script setup>
import { loadService } from "@/api/user";
import { ElMessage } from 'element-plus';
import loadStore from "@/stores/load";

const load = loadStore()

const loadModel = async () => {
  load.setLoad(true)
  await loadService()
  load.setLoad(false)
  ElMessage.success('载入完毕')
}
</script>

<template>
  <div class="container" v-loading="load.load" element-loading-text="模型载入中...">
    <el-button type="primary" @click="loadModel">载入模型</el-button>
  </div>
</template>

<style scope>
.container {
  display: grid;
  place-items: center;
  /* 同时居中 */
  height: 100px;
}
</style>