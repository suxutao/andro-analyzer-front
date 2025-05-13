<script setup>
import { ref } from 'vue'
// 模拟数据
const tableData = ref([
    {
        id: 1,
        apkName: 'com.example.app1',
        softwareName: '示例应用1',
        category: '工具类'
    },
    {
        id: 2,
        apkName: 'com.example.game2',
        softwareName: '休闲游戏',
        category: '游戏类'
    },
    {
        id: 3,
        apkName: 'com.example.social3',
        softwareName: '社交平台',
        category: '社交类'
    }
])

// 详情按钮点击处理
const handleDetail = (row) => {
    console.log('当前行数据:', row.id)
    
}
</script>

<template>
    <h1 style="text-align: center;">软件预测历史记录</h1>
    <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column prop="apkName" label="APK名称" width="420" />
        <el-table-column prop="softwareName" label="软件名称" width="180" />
        <el-table-column prop="category" label="分类结果" />
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button type="primary" size="small" @click="handleDetail(scope.row)">
                    详情
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
.box-card {
    margin: 20px;
}

.card-header {
    font-size: 18px;
    font-weight: bold;
}
</style>