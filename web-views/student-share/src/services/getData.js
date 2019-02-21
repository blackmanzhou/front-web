import URL from './url'
import request from './request'

const get = request.get
// const post = request.post

let API = {
    featchStudentAccountInfo: async function(openid) {
        const params = { openid }
        const response = await get(URL.featchStudentAccountInfo, params)
        return response
    },
    getNewStarShineInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getNewStarShineInfo, params)
        return response
    },
    getExclusiveEnengyInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getExclusiveEnengyInfo, params)
        return response
    },
    getSelfSpecialInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getSelfSpecialInfo, params)
        return response
    },
    getHelpProcessInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getHelpProcessInfo, params)
        return response
    },
    getTeacherMessageInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getTeacherMessageInfo, params)
        return response
    },
    getWonderfulMomentsInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getWonderfulMomentsInfo, params)
        return response
    },
    getProcessWayInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getProcessWayInfo, params)
        return response
    },
    getSharePageInfo: async function(studentCode) {
        const params = { studentCode }
        const response = await get(URL.getSharePageInfo, params)
        return response
    }
}

export default API