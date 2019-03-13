<template>
    <div id="loding">

    </div>
</template>

<script>
export default {
    name: 'LodingComponent',
    props: {
        loading: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
#loading {
    height: 100%;
    width: 100%;
}
</style>


