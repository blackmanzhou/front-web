// const dev_featchStudentAccount = '/third-party/wechat/commonbindingtwo/operate.do'
// const pro_featchStudentAccount = 'http://wxpay.xdf.cn/wechat/commonbindingtwo/operate.do'

const dev_localService = '/web-api'
const pro_localService = 'http://stsuzhou.xdf.cn/WebApi/StudentProcessShare'

// let featchStudentAccount = pro_featchStudentAccount
let localService = pro_localService
let URL = {
    featchStudentAccountInfo: `${localService}/FetchStudentCodeByOpenId`,
    featchStudentProcessRecords: localService,
    getNewStarShineInfo: `${localService}/GetGradePerformance`,
    getClassPerformance: `${localService}/GetClassPerformance`,
    getProcessWayInfo: `${localService}/GetClassesByStuCode`,
    getSharePageInfo: '',
    getStudentBaseInfo: `${localService}/GetStudentBaseInfo`
}

export default URL