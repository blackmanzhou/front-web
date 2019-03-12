<template>
    <div id="book-list">
        <book-item v-for="(item, index) in booklist" :key="index" :book="item" :isShowBottom="index < booklist.length - 1"></book-item>
    </div>
</template>

<script>
import BookItem from './BookItem'

export default {
    name: 'BookList',
    components: {
        BookItem
    },
    props: {
        booklist: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style scoped>
#book-list {
  width: 100%;
  height: 100%
}
</style>
