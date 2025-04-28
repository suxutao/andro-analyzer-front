<script setup>
import {
    Document,
    Setting,
    Connection
} from '@element-plus/icons-vue'
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <el-menu router active-text-color="#409eff" text-color="#bfcbd9">
                <el-menu-item index="/predict">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>模型预测</span>
                </el-menu-item>
                <el-menu-item index="/train">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>训练模型</span>
                </el-menu-item>
                <el-menu-item index="/test">
                    <el-icon>
                        <connection />
                    </el-icon>
                    <span>测试连接</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <div class="content-card">
                    <router-view></router-view>
                </div>
            </el-main>

            <el-footer class="footer">
                <div>电子科技大学</div>
                <div>© 2025 All Rights Reserved</div>
            </el-footer>
        </el-container>
    </el-container>
</template>


<style lang="scss" scoped>
// 全局容器样式
.el-container {
    height: 100vh;
    background-color: #f0f2f5;
}

// 侧边栏样式
.el-aside {
    background-color: #304156;
    transition: width 0.28s;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;

    .el-menu {
        border-right: none;
        background-color: transparent;

        .el-menu-item {
            color: #bfcbd9;
            height: 56px;
            line-height: 56px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }

            &.is-active {
                color: #409eff;
                background-color: #263445;
            }
        }
    }
}

// 主内容区域
.el-main {
    padding: 20px;
    min-height: calc(100vh - 60px);
    margin-left: 200px;

    // 内容卡片样式
    .content-card {
        max-width: 900px;
        background: white;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        padding: 20px;
        margin: 0 auto 20px;
    }
}

// 底部栏样式
.footer {
    height: 50px;
    line-height: 20px;
    text-align: center;
    color: #999;
    font-size: 14px;
    border-top: 1px solid #e6e6e6;
    background: white;
    margin-left: 200px;
}

// 响应式处理
@media (max-width: 768px) {
    .el-aside {
        width: 0 !important;
    }

    .el-main,
    .footer {
        margin-left: 0;
    }
}
</style>