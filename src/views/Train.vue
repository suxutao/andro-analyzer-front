<script setup>
import { ref, reactive } from "vue";
import { trainService } from "@/api/user";
import { ElMessage } from 'element-plus';
import TrainResultVue from "./TrainResult.vue";
import trainDataStore from "@/stores/train";

const form = reactive({
  type: '?',
  url: '?',
})
const data = trainDataStore()

const onSubmit = async () => {
  await trainService()
}
</script>


<template>
  <div v-loading="data.load" element-loading-text="后台训练模型中...">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="分类方式">
        <el-radio-group v-model="form.type">
          <el-radio value="2">二分类</el-radio>
          <el-radio value="5">五分类</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传APK">

      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交训练</el-button>
        <el-button type="primary" @click="onSubmit">展示结果</el-button>
      </el-form-item>
    </el-form>
  </div>
  <TrainResultVue></TrainResultVue>
</template>
