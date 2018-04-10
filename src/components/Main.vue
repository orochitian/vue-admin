<template>
    <el-container>
        <!-- Header Start -->
        <el-header>
            <el-dropdown placement="bottom" @command="dropDownCommand">
                <span class="el-dropdown-link" style="color: #fff">
                    Ryan Lee<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <!-- Header End -->
        <el-container class="right">
            <!-- Aside Start -->
            <el-aside width="230px">
                <el-menu background-color="#393D49"
                         text-color="#ccc"
                         active-text-color="#fff"
                         unique-opened
                         router
                         :default-active="$route.path">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>Navigation</template>
                        <el-menu-item index="/">Home</el-menu-item>
                        <el-menu-item index="/error">Error</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>Page Show</template>
                        <el-menu-item index="/form">Form</el-menu-item>
                        <el-menu-item index="/table">Table</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- Aside End -->
            <!-- Main Start -->
            <el-main>
                <transition name="fade" mode="out-in" appear>
                    <router-view/>
                </transition>
            </el-main>
            <!-- Main End -->
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Main",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(1).fill(item)
            }
        },
        methods: {
            dropDownCommand(command) {
                let that = this;
                if( command === 'logout' ) {
                    this.$confirm('您确定要退出当前用户吗？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        const loading = this.$loading({
                            lock: true,
                            text: '正在注销当前用户...',
                            background: 'rgba(255,255,255,.8)'
                        });
                        setTimeout(() => {
                            loading.close();
                            that.$router.push('/login');
                        }, 2000);
                    }).catch(() => {

                    })
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .el-header {
        background-color: #23262E;
        color: #fff;
        line-height: 60px;
        .el-dropdown{
            line-height: normal;
        }
    }
    .el-aside {
        background-color: #23262E;
        min-height: 100%;
        overflow: hidden;
        .el-menu{
            overflow-y: scroll;
            border-right: none;
            height: 100%;
            width: 247px;
            background-color: #23262E !important;
            .el-menu-item{
                background-color: rgb(35,35,35) !important;
                &.is-active{
                    background-color: #5FB878 !important;
                }
            }
        }
    }
    .right{
        min-width: 1200px;
    }
</style>
