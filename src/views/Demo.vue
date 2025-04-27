<script setup>
import { ref } from "vue";
import { testService } from "@/api/user";
import { ElMessage } from 'element-plus';
const res = ref('未连接')
const color = ref('red')
const getTestData = async () => {
  color.value = 'red'
  res.value = '未连接'
  const result = await testService()
  console.log(result);
  ElMessage.success('服务已成功连接')
  res.value = result.msg
  color.value = 'green'
}
</script>

<template>
  <div class="container">
    <el-button type="primary" @click="getTestData">测试连接</el-button>
    <div>连接状态：<span :class="color">{{ res }}</span></div>
  </div>
</template>

<style scope>
.container {
  display: grid;
  place-items: center;
  /* 同时居中 */
  height: 100px;
}

.red {
  color: red;
}

.green {
  color: rgb(28, 192, 28);
}
</style>