<template>
    <div class="login-container">
        <el-form class="login-form" ref="form" :model="form" label-width="80px">
            <h1>管理员登录</h1>
            <br>
            <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" auto-complete="off" placeholder="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <br><br>
            <el-form-item label="说明："><span style="padding-top: 4px; display: inline-block; color: #ccc;">用户名：admin 密码：admin</span></el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                if( !this.form.name || this.form.name !== 'admin' || !this.form.password || this.form.password !== 'admin' ) {
                    this.$alert('用户名或密码错误！', '提示', {
                        type: 'error'
                    });
                    return false;
                }
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss">
    .login-container{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #2d3a4b;
        .login-form{
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            padding: 35px 0 15px 0;
            margin: 120px auto;
            h1{
                text-align: center;
                color: #fff;
                font-size: 26px;
            }
            .el-button{
                width: 100%;
            }
            .el-form-item{
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                color: #454545;
                input{
                    background: transparent;
                    border: 0px;
                    -webkit-appearance: none;
                    border-radius: 0px;
                    padding: 12px 5px 12px 15px;
                    color: #eee;
                    height: 47px;
                }
                .el-form-item__label{
                    padding-top: 4px;
                }
            }
        }

    }

</style>
