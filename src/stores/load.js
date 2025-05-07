import { ref } from "vue";
import { defineStore } from "pinia";

const loadStore = defineStore('load', () => {
    const load = ref(false)
    const setLoad = (newLoad) => {
        load.value = newLoad
    }
    const removeLoad = () => {
        load.value = {}
    }
    return { load, setLoad, removeLoad }
})

export default loadStore