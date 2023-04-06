<template>
    <div class="login_button">
       <button @click="login">登录</button>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter()

const login = () => {
    router.push('/')
    localStorage.setItem('token', 'token')
}
</script>

<style lang='scss' scoped>
.login_button {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>