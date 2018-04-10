<template>
    <div>
        <h1>管理员登录系统</h1>
        <div class="form-box">
            <form action="#">
                用户名：<input type="text"><br><br>
                密　码：<input type="password"><br><br>
                <button type="button">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">
    h1{
        text-align: center;
    }
    .form-box{
        width: 500px;
        margin: 0 auto;
        padding: 60px 0;
        border: 1px solid #666;
        border-radius: 3px;
        text-align: center;
    }
</style>
