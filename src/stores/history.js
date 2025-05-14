import { defineStore } from 'pinia'
import { ref } from 'vue'

export const historyStore = defineStore('historyStore', () => {
    const dataList = ref([])

    // 删除指定索引的记录
    const deleteItem = (index) => {
        if (index >= 0 && index < dataList.value.length) {
            dataList.value.splice(index, 1)
        }
    }

    // 删除所有记录
    const deleteAll = () => {
        dataList.value = []
    }

    // 将指定索引的记录移动到最前面
    const moveToFront = (index) => {
        if (index > 0 && index < dataList.value.length) {
            const [item] = dataList.value.splice(index, 1)
            dataList.value.unshift(item)
        }
    }

    // 根据 hash 值查找索引
    const findIndexByHash = (hash) => {
        return dataList.value.findIndex(item => item.hash === hash)
    }

    // 添加新记录
    const addItem = (item) => {
        dataList.value.unshift(item)
        if (dataList.value.length > 20) {
            dataList.value.pop()
        }
    }

    return {
        dataList,
        deleteItem,
        deleteAll,
        moveToFront,
        findIndexByHash,
        addItem
    }
}, {
    persist: true
})