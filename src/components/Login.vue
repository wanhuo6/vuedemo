<template>
  <div class="login">
    <h2>{{ msg }}</h2>
    <h2>账号：</h2>
    <h2>密码：</h2>
    <van-button type="info">Vant按钮</van-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: '欢迎'
    }
  }
}
</script>
<style scoped>
.login {
  color: red;
  font-size: 20px;
}
</style>
