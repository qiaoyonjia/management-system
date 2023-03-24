<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentType">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <i class="el-icon-user-solid"></i>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <i class="el-icon-mobile-phone"></i>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phoneRef" />
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
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentType = ref('account')

    // 2.定义方法
    //TODO 忘记密码
    function findPass() {
      console.log('功能待实现')
    }

    // 登录按钮事件
    const handleLogin = () => {
      if (currentType.value === 'account') {
        // 账号登录
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // TODO手机登录
        console.log('phoneRef调用loginAction')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      currentType,
      phoneRef,
      findPass,
      handleLogin
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
