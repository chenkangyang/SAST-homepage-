import * as types from './types.js'

export default {
    handleLoginSubmit:({commit}) => {
        commit(types.HANDLE_LOGIN)
    },
    handleSelect:({commit}) => {
        commit(types.HANDLE_SELECTE)
    },
    resetWelcomeForm:({commit}) => {
        commit(types.REST_WELCOME)
    },
    handleWelcomeSubmit:({commit}) => {
        commit(types.HANDLE_WELCOME)
    }
}