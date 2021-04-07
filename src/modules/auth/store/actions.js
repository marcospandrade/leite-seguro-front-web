import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionLoginIn = ({ dispatch }, payload) => {
    // return services.auth.login(payload).then(res => {
    //     dispatch('ActionSetToken', res.data.accessToken)
    // })
    console.log(payload);
    return
}

export const ActionRegister = ({ dispatch }, payload) => {
    console.log(payload);
    return
}
// export const ActionCheckToken = ({ dispatch, state }) => {
//     if(state.accessToken) {
//         return Promise.resolve(state.accessToken)
//     }

//     const accessToken = storage.getLocalToken()

//     if(!accessToken) {
//         return Promise.reject(new Error('Token inválido'))
//     }

//     dispatch('ActionSetToken', accessToken)
//     return dispatch('ActionLoadSession')
// }

// export const ActionLoadSession = ({ dispatch }) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const { data: { usuario_login, empresaVinculada, autoridadeUsuario } } = await services.auth.loadSession()
//             dispatch('ActionSetUsuarioLogado', usuario_login)
//             dispatch('ActionSetEmpresaVinculada', empresaVinculada)
//             dispatch('ActionSetAutoridadeUsuario', autoridadeUsuario)

//             resolve()
//         } catch (error) {
//             dispatch('ActionSignOut')
//             reject(error)
//         }
//     })
// }

export const ActionSetToken = ({ commit }, payload) => {
    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
    storage.setHeaderToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetToken', '')
}