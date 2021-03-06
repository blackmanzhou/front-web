import URL from './url'
import request from './request'
import {
  processRecordType
} from '@/common'

const get = request.get
// const post = request.post

let API = {
  // #region API(s)
  // 请求集团微服务.
  featchStudentAccountInfo: async function (openid = 'oDkS1s2B4MxvUtqOi7k2_099AXHY', schoolid = '1') {
    const params = {
      openid,
      schoolid
    }
    // const response = await get(URL.featchStudentAccountInfo, params)
    const response = {
      resultCode: 0,
      data: {
        bindingid: 'F9E26DC9-DCFE-462C-B68A-986007DB9D15',
        schoolid: '23',
        studentname: '尹丹婷',
        studentmoblie: '18963657923',
        studentcode: 'SZS20810',
        bindingdate: 1530335996000,
        openid: 'oxdxlt3lMS0qldGvwY6X7aptAmLc',
        pic: 'http://i.xdf.cn/card/QrImages/school_23_studentcode_SZS20810.png',
        unionid: '',
        isdefault: 1
      }
    }

    return response
  },

  getStudentBaseInfo: async function (studentCode) {
    const params = {
      studentCode
    }
    const response = await get(URL.getStudentBaseInfo, params)
    return response
  },

  getProgressRecord: async function (studentCode, classCode) {
    let teacherEvaluationData = await this.getTeacherMessageInfo(studentCode, classCode)
    let keywordData = await this.getSelfSpecialInfo(studentCode, classCode)
    let classPerformanceData = await this.getExclusiveEnengyInfo(studentCode, classCode)

    return {
      keyword: keywordData? keywordData.keyword : '',
      teacherEvaluation: teacherEvaluationData? teacherEvaluationData.evaluation : '',
      classPerformance: convertClassPerformance(classPerformanceData)
    }
  },

  getNewStarShineInfo: async function (studentCode, classCode) {
    const params = {
      studentCode,
      classCode
    }
    const response = await get(URL.getNewStarShineInfo, params)
    return response
  },
  getExclusiveEnengyInfo: async function (studentCode, classCode) {
    const params = {
      studentCode,
      classCode
    }
    const response = await get(URL.getClassPerformance, params)
    return response
  },
  getSelfSpecialInfo: async function (studentCode, classCode) {
    let keyword = ''
    const keywords = await getSelfKeyword(studentCode, classCode)
    if (keywords && keywords.length > 0) {
      keyword = keywords[0].Content
    }
    return {
      keyword
    }
  },
  getHelpProcessInfo: async function (studentCode, classCode) {
    let recommendBooks = await getRecommendBooks(studentCode, classCode)
    return {
      recommendBooks
    }
  },
  getTeacherMessageInfo: async function (studentCode, classCode) {
    let evaluation = ''
    const teacherEvaluations = await getTeacherEvaluation(studentCode, classCode)
    if (teacherEvaluations && teacherEvaluations.length > 0) {
      evaluation = teacherEvaluations[0].Content
    }
    return {
      evaluation
    }
  },
  getWonderfulMomentsInfo: async function (studentCode, classCode) {
    let wonderfulMoments = await getWonderfulMoments(studentCode, classCode)
    return {
      wonderfulMoments
    }
  },
  getSharePageInfo: async function (studentCode, classCode) {
    let shareImgs = await getShareImg(studentCode, classCode)
    return {
      shareImg: shareImgs[0]
    }
  },

  getProcessWayInfo: async function (studentCode) {
    const params = {
      studentCode
    }
    const response = await get(URL.getProcessWayInfo, params)
    return response
  }
  // #endregion
}

//#region User Method(s)
async function getProcessRecordByType(studentCode, classCode, type) {
  let recordList = []

  const params = {
    studentCode,
    classCode,
    type
  }
  const response = await get(URL.featchStudentProcessRecords, params)

  if (response && response.data) {
    recordList = response.data.StudentProcessRecordList
  }

  return recordList
}

/**
 * 获取关键词语
 */
async function getSelfKeyword(studentCode, classCode, type = processRecordType.SELF_KEYWORD) {
  let keywords = await getProcessRecordByType(studentCode, classCode, type)
  return keywords || []
}

/**
 * 获取推荐读物
 */
async function getRecommendBooks(studentCode, classCode, type = processRecordType.RECOMMEND_BOOK) {
  let recommendBooks = await getProcessRecordByType(studentCode, classCode, type)
  return recommendBooks || []
}

/**
 * 获取老师评语
 */
async function getTeacherEvaluation(studentCode, classCode, type = processRecordType.TEACHER_EVALUATION) {
  let teacherEvaluations = await getProcessRecordByType(studentCode, classCode, type)
  return teacherEvaluations || []
}

/**
 * 获取精彩瞬间图片
 */
async function getWonderfulMoments(studentCode, classCode, type = processRecordType.WONDERFUL_MOMENT) {
  let wonderfulMoments = await getProcessRecordByType(studentCode, classCode, type)
  return wonderfulMoments || []
}

/**
 * 获取分享图片
 */
async function getShareImg(studentCode, classCode, type = processRecordType.SHARE_IMG) {
  let shareImgs = await getProcessRecordByType(studentCode, classCode, type)
  return shareImgs || []
}

/**
 * 转化后台 ClassPerformance Entity
 */
function convertClassPerformance(performance) {
  let newObj = {};

  if (performance) {
    newObj = {
      application: performance.CPApplication || 0,
      attention: performance.CPAttention || 0,
      comprehension: performance.CPComprehension || 0,
      discipline: performance.CPDiscipline || 0,
      positivity: performance.CPPositivity || 0,
      evaluation: performance.CPNote
    };
  }

  return newObj;
}
//#endregion

export default API
