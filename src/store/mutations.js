import {
    HANDLE_LOGIN
}
from './types.js'

import getters from './getters.js'

const state = {
    loginFormVisible:false,
    activeIndex: '1',
    welcomeFormVisible: false,
    loginFormVisible:false,
    welcomeFormWidth: '100px',
    welcomeForm: {         
        department: '',
        reason: '',
        name: '',
        userId: ''
      },
    welcomeFormRules: {
      department: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ],
      reason: [
        { required: true, message: '请填写申请理由', trigger: 'blur'}
      ],
      name: [
        { required:true, message: '输入你的姓名', trigger: 'blur'}
      ],
      userId: [
        { required:true, message: '输入你的学号', trigger: 'blur'},
        { min: 9, max: 9, message: '长度为9个字符', trigger: 'blur' }
      ]
    }
};

const mutations = {
    [HANDLE_LOGIN](state){
        console.log(state);
    }
}

export default {
    state,
    mutations
}