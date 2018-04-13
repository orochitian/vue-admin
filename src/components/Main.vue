<template>
    <el-container id="body">
        <!-- Header Start -->
        <el-header>
            <el-row :gutter="20">
                <el-col :span="1" class="logo-col">
                    <router-link to="/" tag="span">Vue Admin System</router-link>
                </el-col>
                <el-col :span="11" :offset="8" class="user-menu">
                    <el-dropdown placement="bottom" @command="dropDownCommand">
                        <span class="el-dropdown-link" style="color: #fff">
                            <i class="lnr lnr-user"></i> Ryan Lee<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
        <!-- Header End -->
        <el-container>
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
                        <el-menu-item index="/charts">Charts</el-menu-item>
                        <el-menu-item index="/form">Form</el-menu-item>
                        <el-menu-item index="/table">Table</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- Aside End -->
            <!-- Main Start -->
            <el-main>
                <div class="breadcrumb-outer">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/table' }">活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
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
        created() {
            this.isLogin();
        },
        beforeUpdate() {
            this.isLogin();
        },
        methods: {
            //  验证登录
            isLogin() {
                if( !localStorage.getItem('uId') ) {
                    this.$router.push('/login');
                }
            },
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
                            background: 'rgba(0,0,0,.8)',
                            colora: '#fff'
                        });
                        setTimeout(() => {
                            loading.close();
                            that.$router.push('/login');
                            localStorage.removeItem('uId');
                        }, 2000);
                    }).catch(() => {});
                } else if( command === 'user' ) {
                    that.$router.push('/user');
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
        .logo-col{
            width: 221px;
            border-right: 1px solid #666;
        }
    }
    .breadcrumb-outer{
        margin-bottom: 30px;
    }
    .el-dropdown-menu{
        min-width: 98px;
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
    #body{
        min-width: 1200px;
    }
    .user-menu{
        text-align: right;
        .el-dropdown{
            cursor: pointer;
        }
    }
</style>
