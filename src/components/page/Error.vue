<template>
    <div id="error-container">
        <div class="error-inner">
            <el-button type="primary" @click="$router.go(-1)">返回上一页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped lang="scss">
    #error-container{
        width: 100%;
        min-height: 100%;
        background-color: #000;
        overflow: hidden;
    }
    .error-inner{
        width: 630px;
        margin: 50px auto;
        background: #000 url("../../assets/404.png") no-repeat center;
        padding-top: 550px;
        text-align: center;
    }
</style>
