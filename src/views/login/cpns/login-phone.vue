<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="user">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="user.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <div class="get-code">
          <el-input v-model="user.verificationCode" />
          <el-button type="primary" class="codeBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const user = reactive({
      phone: '',
      verificationCode: ''
    })

    return {
      user,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  position: absolute;
}

.codeBtn {
  margin-left: 8px;
  font-size: 12px;
}
</style>
