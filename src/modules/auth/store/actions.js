import services from '@/http'
import * as storage from '../../auth/storage'
import * as types from './mutation-types'

export const ActionLoginIn = ({ dispatch }, payload) => {
    services.auth.login(payload).then(res => {
        SetToken();
        dispatch('ActionSetUsuario', res.data);
        console.log(res);
        return;
    })
    .catch((err) => {
        return err;
    })
    console.log(payload);
    return
}

export const ActionRegister = ({ dispatch }, payload) => {
    SetToken()

    
    return services.auth.cadastrarUsuario(payload);
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
    SetToken();
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
    storage.setHeaderToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetToken', '')
}

export const SetToken = () => {
    var token = "zrqFNfUow4rNEOgBXVwE1UNh8j6k8JCxzGFOD6eUU9KF4p8PIesk9JY7fKehMIkA"
    storage.setHeaderToken(token);
    storage.setLocalToken(token);
}