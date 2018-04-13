<template>
    <el-row>
        <el-col :span="12" id="chart1" class="charts"></el-col>
        <el-col :span="12" id="chart2" class="charts"></el-col>
        <el-col :span="12" id="chart3" class="charts"></el-col>
        <el-col :span="12" id="chart4" class="charts"></el-col>
        <el-col :span="12" id="chart5" class="charts"></el-col>
        <el-col :span="12" id="chart6" class="charts"></el-col>
    </el-row>
</template>

<script>
    import echartsOption from '../../echarts.init';
    export default {
        name: "Charts",
        props: {
            currentPage: '123'
        },
        mounted: function() {
            echartsOption.init([
                'chart1',
                'chart2',
                'chart3',
                'chart4',
                'chart5',
                'chart6'
            ]);
        }
    }
</script>

<style scoped>
    .charts{
        height: 400px;
    }
</style>
