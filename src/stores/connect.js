import { ref } from "vue";
import { defineStore } from "pinia";

const connectStore = defineStore('connect', () => {
    const connect = ref('未连接')
    const setCon = (newConnect) => {
        connect.value = newConnect
    }
    const removeCon = () => {
        connect.value = {}
    }
    return { connect, setCon, removeCon }
})

export default connectStore