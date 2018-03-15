<template>
  <div class="login">
    <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" aria-required="true" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('loginForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>
  export default {
    name: "",
    data() {
      return {
        labelPosition: 'right',
        loginForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            var redirectUrl = '/home';
            redirectUrl && this.$router.push({path: redirectUrl});
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.login{
  width: 40%;
  margin: 0 auto;
  height: 300px;
  display: -webkit-flex;
   display: flex;
-webkit-flex-direction: row;
   flex-direction: row;
  -webkit-align-items: center;
   align-items: center;
  -webkit-justify-content: center;
   justify-content: center;

  border: 1px solid #f8f8f8;
  box-shadow: 1px 1px 5px #888888;
  margin-top: 100px;
}
  .login form{
    width: 60%;
  }
</style>
