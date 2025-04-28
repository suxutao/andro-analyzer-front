<script setup>
import { ref } from "vue";
import { testService } from "@/api/user";
import { ElMessage } from 'element-plus';
import connectStore from '@/stores/connect'

const connect = connectStore()
const color = connect.connect === '未连接' ? ref('red') : ref('green')
const getTestData = async () => {
  color.value = 'red'
  connect.setCon('未连接')
  const result = await testService()
  console.log(result);
  ElMessage.success('服务已成功连接')
  connect.setCon(result.msg)
  color.value = 'green'
}


</script>

<template>
  <div class="container">
    <el-button type="primary" @click="getTestData">测试连接</el-button>
    <div>连接状态：<span :class="color">{{ connect.connect }}</span></div>
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