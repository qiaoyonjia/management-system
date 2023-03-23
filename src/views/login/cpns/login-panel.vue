<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <i class="el-icon-user-solid"></i>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <i class="el-icon-mobile-phone"></i>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" @click="findPass" href="">忘记密码</el-link>
    </div>

    <el-button type="primary" class="loginBtn" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    //TODO 忘记密码
    function findPass() {
      console.log('功能待实现')
    }

    // 登录按钮事件
    const handleLogin = () => {
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      findPass,
      handleLogin,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .loginBtn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
