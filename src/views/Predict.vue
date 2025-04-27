<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { ElMessage } from 'element-plus';

const upload = ref<UploadInstance>()
const loading = ref(false)
const form = reactive({
  type: '?',
  url: '?',
})

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}

const uploadSuccess: UploadProps['onSuccess'] = (result) => {
  ElMessage.success('apk文件上传成功')
  form.url = result.url
}

import { predictService } from '@/api/user';

const onSubmit = async() => {
  if (form.type == '?') {
    ElMessage.error('请选择分类方式')
    return
  }
  if (!form.url.endsWith('.apk')) {
    ElMessage.error('请选择apk文件')
    return
  }
  loading.value=true
  const response = await predictService(form)
  const result=response.data
  loading.value=false
  ElMessage.success('apk解析完成')
  console.log(result);
}
</script>

<template>
  <div v-loading="loading" element-loading-text="后台apk解析中">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="分类方式">
        <el-radio-group v-model="form.type">
          <el-radio value="2">二分类</el-radio>
          <el-radio value="5">五分类</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传APK">
        <el-upload ref="upload" action="/api/upload" :limit="1" :on-exceed="handleExceed" :on-success="uploadSuccess"
          :auto-upload="false" accept=".apk">
          <template #trigger>
            <el-button type="primary" style="margin-right: 10px">选择APK文件</el-button>
          </template>
          <el-button type="success" @click="submitUpload">
            上传到服务器
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-left: 220px">提交数据</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scope>
.red {
  color: red;
}

.green {
  color: rgb(28, 192, 28);
}
</style>