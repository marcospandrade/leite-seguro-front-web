import { setXToken } from '@/http'

export const setHeaderToken = token => {
    console.log("token storage")
    console.log(token)
    setXToken(token)
}
export const getLocalToken = () => localStorage.getItem('accessToken')
export const deleteLocalToken = () => localStorage.removeItem('accessToken')
export const setLocalToken = accessToken => localStorage.setItem('accessToken', accessToken)