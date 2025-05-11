<script setup>
import { ref, reactive, onMounted } from "vue";
import { trainService } from "@/api/user";
import { ElMessage } from 'element-plus';
import TrainResultVue from "./TrainResult.vue";
import trainDataStore from "@/stores/train";
const form = reactive({
  ratio: '',
  epochs: '',
  hidden_dim: '',
  lr: '',
  data_path: '',
})
const data = trainDataStore()
const onSubmit = async () => {
  for (const key in form) {
    if (form[key] === '') {
      ElMessage.error(`${key}还未给出数据`)
      return
    }
  }
  ElMessage.info('开始训练')
  data.load = true
  const result = await trainService(form)
  data.load = false
  ElMessage.success('模型训练完成')
}

const showResult = () => {
  data.show = !data.show
}
const stop = () => {
  data.load = false
}

const percentage = ref(1)
onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 1
  }, 50000)
})
</script>


<template>
  <div v-loading="data.load" element-loading-text="后台训练模型中...">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="训练集比例">
        <el-select v-model="form.ratio" placeholder="Select" size="large" style="width: 240px">
          <el-option label=0.6 value=0.6 />
          <el-option label=0.7 value=0.7 />
          <el-option label=0.8 value=0.8 />
        </el-select>
      </el-form-item>
      <el-form-item label="训练轮次">
        <el-select v-model="form.epochs" placeholder="Select" size="large" style="width: 240px">
          <el-option label=200 value=200 />
          <el-option label=250 value=250 />
          <el-option label=300 value=300 />
        </el-select>
      </el-form-item>
      <el-form-item label="隐藏层维度">
        <el-select v-model="form.hidden_dim" placeholder="Select" size="large" style="width: 240px">
          <el-option label=64 value=64 />
          <el-option label=128 value=128 />
          <el-option label=256 value=256 />
        </el-select>
      </el-form-item>
      <el-form-item label="学习率">
        <el-select v-model="form.lr" placeholder="Select" size="large" style="width: 240px">
          <el-option label=0.0001 value=0.0001 />
          <el-option label=0.0005 value=0.0005 />
          <el-option label=0.001 value=0.001 />
        </el-select>
      </el-form-item>
      <el-form-item label="数据集路径">
        <el-input v-model="form.data_path" style="width: 240px" placeholder="Please input" />
      </el-form-item>
    </el-form>
  </div>
  <el-progress :percentage v-show="data.load" style="margin-bottom: 10px;"/>
  <el-button type="primary" @click="onSubmit" :disabled="data.load">提交训练</el-button>
  <el-button type="danger" @click="stop">停止训练</el-button>
  <el-button type="success" @click="showResult">{{ data.show ? '隐藏结果' : '展示结果' }}</el-button>
  <TrainResultVue v-show="data.show" style="margin-top: 20px;"></TrainResultVue>
</template>
