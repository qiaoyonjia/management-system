<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" :show-password="isShowPassword" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const isShowPassword = ref(true)

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 验证输入表单内容是否通过校验
          // TODO 登录逻辑
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存  localStorage
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            // 未勾选记住密码，则清除本地缓存
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.登录验证
          /**
           * 登录的逻辑（网络请求，拿到数据后的处理）
           * 数据需要保存到某一个位置
           * 发送其它的请求（请求当前用户的信息）
           * 拿到用户的菜单
           * 跳到首页
           */
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      isShowPassword,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
