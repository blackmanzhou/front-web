<template>
    <div id="class-item-component">
        <div class="item-left">
            <div>{{classInfo.classNamePrefix}}</div>
            <div>
                <p>{{classInfo.className}}</p>
                <p>{{classInfo.teacherName}}老师 | {{classInfo.teacherPhone}}</p>
            </div>
        </div>
        <div class="item-right">
            <span><img src="../assets/images/arrow-right.png" alt=""></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassItem',
    props: {
        classInfo: Object
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#class-item-component {
    display: flex;
    justify-content: space-between;
    height: 5rem;
    padding: .625rem /* 10/16 */;
    background-color: #ffffff;
    border-radius: .9375rem /* 15/16 */
}

#class-item-component .item-left {
    display: flex;
    align-items: center;
}

#class-item-component .item-left>div:first-child {
    height: 3.75rem /* 60/16 */;
    width: 3.75rem;
    text-align: center;
    line-height: 3.75rem;
    border-radius: 50%;
    background-color: #52D9B9;
    margin-right: 1.25rem /* 20/16 */
}

#class-item-component .item-left>div:last-child{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

#class-item-component .item-left>div:last-child>p:first-child {
    font-size: 1.25rem /* 20/16 */
}

#class-item-component .item-left>div:last-child>p:last-child {
    color: #8a8a8a;
    font-size: small;
}

#class-item-component .item-right {
    display: flex;
    align-items: center;
}

</style>


