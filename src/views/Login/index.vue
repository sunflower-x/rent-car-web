<template>
  <!-- 外部容器 -->
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <div class="left">
        <span>LOGO</span>
      </div>
      <div class="right">
        <span>常见问题</span>
        <span>帮助指南</span>
        <span>联系方式</span>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <el-card>
        <div class="left">
          <img
            src="../../assets/image/Snipaste_2023-02-10_16-56-24.png"
            alt="图片"
          />
        </div>
        <div class="right">
          <h2>汽车租赁管理平台</h2>
          <span style="color: #8494a9">欢迎登录</span>
          <el-form size="large">
            <el-form-item label="账号">
              <el-input
                v-model="username"
                type="username"
                placeholder="请输入账号"
              />
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                v-model="password"
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <a href="#">忘记密码?</a>
            <el-button @click="handleLogin">登录</el-button>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { loginReq } from "../../api/user";
import { ElMessage } from "element-plus";
import {useRouter} from 'vue-router'
const router=useRouter()
let username = ref("jack");
let password = ref("123456");
async function handleLogin() {
  // console.log(username.value, password.value);
  //   点击按钮发送登录请求
  let res = await loginReq({
    username: username.value,
    password: password.value,
  });
  console.log(res,2333322222);
  // 登录成功
  if (res.code == 200) {
    // 弹出提示消息
    ElMessage({
      showClose: true,
      message: "登录成功",
      type: "success",
      center: false,
    });
    // 保存token
    localStorage.setItem("token", res.data.token);
    // 跳转页面
    router.push('/')
  } else {
    ElMessage({
      showClose: true,
      message: "登录失败",
      type: "error",
      center: false,
    });
  }
  console.log(res, 11111111);
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .header {
    height: 80px;

    background-color: #225ffb;
    padding-left: 30px;
    padding-right: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    .left {
    }
    .right {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .content {
    height: calc(100% - 80px);

    display: flex;
    align-items: center;
    justify-content: space-around;
    // border: 1px solid red;
    .el-card {
      width: 700px;
      .left {
        img {
          height: 400px;
          float: left;
        }
      }
      .right {
        float: right;
        .el-form {
          margin-top: 80px;
          a {
            float: right;
          }
          .el-button {
            margin-top: 15px;
            width: 100%;
            border-radius: 40px;
            background-color: #225ffb;
            color: white;
          }
        }
      }
    }
  }
}
</style>
>
