<template>
    <div id="qrcode-component">
        <div>
            <p>{{title}}</p>
        </div>
        <div>
            <img :src="imgsrc" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CodeItem',
    props: {
        title: {
            type: String,
            default: '这是一个标题'
        },
        imgsrc: {
            type: String,
            default: 'data:image/png;base64,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'
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#qrcode-component {
    height: 100%;
    width: 100%;
    overflow-y: auto;
}

#qrcode-component>div:first-child {
    padding: 1.25rem /* 20/16 */;
    font-size: 1.25rem /* 20/16 */
}

#qrcode-component>div:last-child {
    text-align: center;
}

#qrcode-component>div>img{
    width: 50%;
    border: .0625rem /* 1/16 */ dashed #cccccc
}
</style>


