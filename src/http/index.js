import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

Vue.use(VueResource);

const http = Vue.http

//Definir api para consumo de dados
http.options.root = 'https://leiteseguro.hasura.app/api/rest/'

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

const setXToken = token => {
    //Setar accessToken no cabeçalho da requisição
    http.headers.common['x-hasura-admin-secret'] = `${token}`
}

const deletarUsuario = cpf_cnpj => {
    return http.get(`https://leiteseguro.hasura.app/v1/graphql/set_usuario_del?cpf_cnpj=${cnpjEmpresa}`);
}

export default services
export { http, setXToken, deletarUsuario }