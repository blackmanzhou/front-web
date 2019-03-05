<template>
    <div id="detail-page">
       <code-item :title="title"></code-item>
    </div>
</template>

<script>
import CodeItem from '@/components/QRCodeItemComponent.vue'
export default {
    name: 'ClassDetailPage',
    components: {
        CodeItem
    },
    data() {
        return {
            title: '老师二维码'
        }
    }
}
</script>

<style scoped>

</style>


