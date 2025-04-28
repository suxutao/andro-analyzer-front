import { reactive } from "vue";
import { defineStore } from "pinia";

const preStore = defineStore('pre', () => {
    const pre = reactive({ loading: false })
    const setLoad = (newLoad) => {
        pre.loading = newLoad
    }
    const getLoad = () => {
        return pre.loading
    }
    const removePre = () => {
        pre.value = {}
    }
    return { pre, setLoad, getLoad, removePre }
})

export default preStore