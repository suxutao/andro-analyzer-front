import { ref } from "vue";
import { defineStore } from "pinia";

const preDataStore = defineStore('preData', () => {
    const data = ref({})
    const show = ref(false)
    const setData = (newData) => {
        data.value = newData
    }
    const removeData = () => {
        data.value = {}
    }
    return { data, show, setData, removeData }
})

export default preDataStore