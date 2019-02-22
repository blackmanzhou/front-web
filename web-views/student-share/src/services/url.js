const dev_featchStudentAccount = '/third-party/wechat/commonbindingtwo/operate.do'
const pro_featchStudentAccount = 'http://wxpay.xdf.cn/wechat/commonbindingtwo/operate.do'

const dev_localService = '/web-api'

let URL = {
    featchStudentAccountInfo: dev_featchStudentAccount,
    featchStudentProcessRecords: dev_localService,
    getNewStarShineInfo: `${dev_localService}/GetNormalExamTest`,
    getClassPerformance: `${dev_localService}/GetClassExamTest`,
    getProcessWayInfo: `${dev_localService}/GetClassesByStuCode`,
    getSharePageInfo: '',
    getStudentBaseInfo: `${dev_localService}/GetStudentBaseInfo`
}

export default URL