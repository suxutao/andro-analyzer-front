import { ref } from "vue";
import { defineStore } from "pinia";

const trainDataStore = defineStore('trainData', () => {
    const data = ref({})
    const show = ref(false)
    const load = ref(false)
    const setData = (newData) => {
        data.value = newData
    }
    const removeData = () => {
        data.value = {}
    }
    return { data, show, load, setData, removeData }
})

export default trainDataStore