<template>
    <div id='classlist-page'>
        <div class="page-top">
            <div>
                <div>海沃德</div>
            </div>
            <img src="../assets/images/icon-school.png" alt="">
        </div>
        <ul v-for="item in classList" :key="item.id">
            <li @click="goDetail(item.id)"><class-item :classInfo="item"></class-item></li>
        </ul>
    </div>
</template>

<script>
import ClassItem from '@/components/ClassItemComponent.vue'
export default {
    name: 'ClasslistPage',
    components: {
        ClassItem
    },
    data() {
        return {
            classList: [
                {
                    id: 1,
                    classNamePrefix: '语',
                    className: '一年级语文',
                    teacherName: '里弗斯',
                    teacherPhone: '18206296760'
                },
                {
                    id: 2,
                    classNamePrefix: '语',
                    className: '一年级语文',
                    teacherName: '里弗斯',
                    teacherPhone: '18206296760'
                },
                {
                    id: 3,
                    classNamePrefix: '语',
                    className: '一年级语文',
                    teacherName: '里弗斯',
                    teacherPhone: '18206296760'
                }
            ]
        }
    },
    methods: {
        goDetail(classId) {
            this.$router.push(`/class-list/${classId}`)
        }
    }
}
</script>

<style scoped>
#classlist-page {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: #C8E6C7;
}

#classlist-page .page-top>div:first-child {
    background: url('../assets/images/icon-tag.png')
}

#classlist-page .page-top {
    display: flex;
    align-items: center;
    justify-content: space-around
}

#classlist-page .page-top>div{
    display: flex;
    align-items: center;
    height: 8rem /* 128/16 */;
    width: 8rem
}

#classlist-page .page-top>div>div {
    width: 8.125rem /* 130/16 */;
    font-size: 1.475rem /* 30/16 */;
    color: #fff;
    height: 3.75rem /* 60/16 */;
    text-align: center;
    line-height: 3.75rem;
    transform: rotate(-47deg)
}

#classlist-page .page-top>img{
    height: 10rem /* 128/16 */;
    width: 10rem
}

#classlist-page>ul {
    width: 95%;
    margin: 1.25rem  auto/* 20/16 */
}

#classlist-page>ul>li {
    margin: 1.25rem /* 10/16 */
}
</style>


