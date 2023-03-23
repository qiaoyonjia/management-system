// 编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '必须输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码必须是6位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
