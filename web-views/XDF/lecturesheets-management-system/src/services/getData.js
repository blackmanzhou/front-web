import URL from './url'
import request from './request'
import { processRecordType } from '@/common'

const get = request.get
// const post = request.post

let API = {
    login: async function (user) {
        console.log(user)
        if (user.userName == 'tom' && user.password == '123') {
            let response = { resultCode: 0, data: user }
            return response
        } else {
            return { resultCode: -1, message: 'error' }
        }
    }
}
export default API