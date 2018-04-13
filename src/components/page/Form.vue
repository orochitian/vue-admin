<template>
    <el-row>
        <el-col :span="12" class="form-container">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户名：">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="权限等级：">
                    <el-select v-model="form.region" placeholder="请选择权限等级">
                        <el-option label="超级管理员" value="1"></el-option>
                        <el-option label="一级管理员" value="2"></el-option>
                        <el-option label="普通管理员" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="到期时间：">
                    <el-col :span="11">
                        <el-date-picker type="date" :editable="false" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" :editable="false" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否启用：">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="账号：">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="测试1"></el-checkbox>
                        <el-checkbox label="测试2"></el-checkbox>
                        <el-checkbox label="测试3"></el-checkbox>
                        <el-checkbox label="测试4"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="账号类型：">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="前端账号"></el-radio>
                        <el-radio label="后台账号"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input type="textarea" resize="none" rows="5" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getData">立即创建</el-button>
                    <el-button type="warning" @click="cancelForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Form",
        data() {
            return {
                loading: true,
                form: {
                    username: '',
                    password: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '前端账号',
                    desc: ''
                }
            }
        },
        methods: {
            getData(ev) {
                const loading = this.$loading({
                    lock: true,
                    text: '账号创建中...',
                    background: 'rgba(255,255,255,.8)',
                    target: '.form-container'
                });
                setTimeout(() => {
                    loading.close();
                    this.form = {
                        name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '前端账号',
                        desc: ''
                    }
                    this.$message({
                        message: '创建成功！',
                        type: 'success'
                    });

                }, 1500);
            },
            cancelForm() {
                this.$message({
                    message: '表单已重置',
                    type: 'success'
                });
                this.form = {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '前端账号',
                    desc: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
