import Vue from 'vue'
import { resultMsg, resultCode } from '@/common'

let request = {
    post: async function (url, data) {
        const response = await Vue.http.post(url, data)

        if (!response || !response.data) {
            return { resultCode: resultCode.REQUEST_ERROR, resultMsg: resultMsg.REQUEST_ERROR }
        } else {
            return { resultCode: resultCode.OK, data: response.data }
        }       
    },

    get: async function (url, params) {
        if (url && params) {
            url += '?'
            for (let key in params) {
                url += key + '=' + (params[key]) + '&'
            }

            url = url.substring(0, url.lastIndexOf('&'))
            
        }
        
        const response = await Vue.http.get(url, null)
        if (!response) {
            return { resultCode: resultCode.REQUEST_ERROR, resultMsg: resultMsg.REQUEST_ERROR }
        } else {
            return { resultCode: resultCode.OK, data: response.data }
        }    
    }
}

export default request