import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        student: {},
        classList: [], //学生所有的班级
        currentClass: {},
        selfKeyword: '',
        recommendBooks: [],
        teacherEvaluation: '',
        wonderfulMoments: [],
        shareImg: '',
        xdfGrade: {},
        classPerformance: {}
    },
    mutations: {
        student(state, data) {
            if (data) {
                state.student = {
                    studentName: data.SBIStuName,
                    studentCode: data.SBIStuCode
                }
            }
        },
        classList(state, classes) {
            if (classes) {
               state.classList = classes
            }
            console.log(state)
        },
        currentClass(state, classObj) {
            if (classObj) {
                state.currentClass = classObj
            }
        },
        selfKeyword(state, keyword) {
            state.selfKeyword = keyword
        },
        recommendBooks(state, books) {
            if(books) {
                state.recommendBooks = books
            }
            console.log(state)
        },
        teacherEvaluation(state, evaluation) {
            state.teacherEvaluation = evaluation
            console.log(state)
        },
        wonderfulMoments(state, data) {
            if (data) {
                state.wonderfulMoments = data
            }
            console.log(state)
        },
        shareImg(state, data) {
            state.shareImg = data
            console.log(state)
        },
        xdfGrade(state, data) {
            if (data) {
                state.xdfGrade = data
            }
            console.log(state)
        },
        classPerformance(state, data) {
            if (data) {
                state.classPerformance = data
            }
            console.log(state)
        }
    }
})

export default store