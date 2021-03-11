import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

Vue.use(VueResource);

const http = Vue.http

//Definir api para consumo de dados
http.options.root = 'http://localhost:3300/api/'

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

const setXToken = accessToken => {
    //Setar accessToken no cabeçalho da requisição
    http.headers.common['x-access-token'] = `${accessToken}`
}

export default services
export { http, setXToken }