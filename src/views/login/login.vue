<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <loginPanel class="login-panel" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');

  .login-panel {
    margin-top: -180px;
  }
}
</style>
