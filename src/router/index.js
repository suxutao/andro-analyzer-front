import LayoutVue from "@/views/Layout.vue";
import { createRouter, createWebHistory } from 'vue-router'
import DemoVue from '@/views/Demo.vue'
import PredictVue from "@/views/Predict.vue";
import TrainVue from "@/views/Train.vue";
import LoadVue from "@/views/Load.vue";

//定义路由关系
const routes = [
    {
        path: '/', component: LayoutVue, redirect: '/test', children: [
            { path: '/test', component: DemoVue },
            { path: '/predict', component: PredictVue },
            { path: '/train', component: TrainVue },
            { path: '/load', component: LoadVue },
        ]
    }
]

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//导出路由
export default router