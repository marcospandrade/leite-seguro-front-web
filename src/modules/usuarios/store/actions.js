import services from '@/http'
import * as storage from '../../auth/storage'
import * as types from './mutation-types'

export const ActionGetUsuariosRegistrados = ({
    dispatch
}) => {
    return services.usuarios.getUsuarios()
    .then(res => {
        // dispatch('ActionSetUsuarios', res.data)
        console.log(res)
    }).catch(err => {
        console.log(err);
    })
}

export const ActionRegister = ({
    dispatch
}, payload) => {
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

export const ActionSetUsuarios = ({
    commit
}, payload) => {
    commit(types.SET_USUARIOS, payload)
}