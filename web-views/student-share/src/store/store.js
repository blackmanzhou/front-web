import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        student: {},
        classList: [], //学生所有的班级
        currentClass: null,
        selfKeyword: '',
        recommendBooks: [],
        teacherEvaluation: '',
        wonderfulMoments: [],
        shareImg: ''
    },
    mutations: {
        student(state, data) {
            state.student = {
                studentName: data.SBIStuName,
                studentCode: data.SBIStuCode
            }
        },
        classList(state, classes) {
            let newClassArray = []
            classes.forEach(item => {
                newClassArray.push({
                    classCode: item.CIClassCode,
                    className: item.CIClassName
                })
            })

            state.classList = newClassArray
            state.currentClass = newClassArray[0]
        },
        currentClass(state, classObj) {
            state.currentClass = classObj
        },
        selfKeyword(state, keyword) {
            state.selfKeyword = keyword
        },
        recommendBooks(state, books) {
            state.recommendBooks = books
        },
        teacherEvaluation(state, data) {
            state.teacherEvaluation = data.Content
            console.log(state)
        },
        wonderfulMoments(state, data) {
            state.wonderfulMoments = data
            console.log(state)
        },
        shareImg(state, data) {
            state.shareImg = data
            console.log(state)
        }
    }
})

export default store