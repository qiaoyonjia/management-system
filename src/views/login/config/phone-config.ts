// 编写规则
export const rules = {
  phone: [
    {
      required: true,
      message: '必须输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    {
      required: true,
      message: '必须输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^\d{4}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ]
}
