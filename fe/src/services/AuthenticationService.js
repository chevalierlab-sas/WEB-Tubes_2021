import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}


// AuthenticationService.register({
//     emai: 'testing@gmail.com',
//     password: '123456'
// })