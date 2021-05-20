import services from '@/http'
import * as storage from '../../auth/storage'
import * as types from './mutation-types'

export const ActionLoginIn = ({ dispatch }, payload) => {
    SetToken();
    console.log("payload")
    console.log(payload)
    services.auth.login(payload).then(res => {
        console.log("Res actions")
        console.log(res)
        dispatch('ActionSetUsuario', res.data);
        return;
    })
    .catch((err) => {
        return err;
    })
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
    // console.log("to setando token")

    var token = "zrqFNfUow4rNEOgBXVwE1UNh8j6k8JCxzGFOD6eUU9KF4p8PIesk9JY7fKehMIkA"
    storage.setHeaderToken(token);
    storage.setLocalToken(token);
}