<template>
  <div id="HelpProcess-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      :class="!recommendBooks || recommendBooks.length == 0? 'NO-data' : ''"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
      :swipe-options="{direction: 'horizontal'}"
    >
      <header-title :title="title" :className="className"></header-title>
      <book-list
        v-if="recommendBooks && recommendBooks.length > 0"
        class="bookList"
        :booklist="recommendBooks"
      ></book-list>
    </v-touch>
    <run-horse :currentIndex="5"></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg, constants } from "@/common";
import RunHorse from "@/components/RunHorse";
import BookList from "@/components/BookList";
import HeaderTitle from "@/components/HeaderTitle";

export default {
  name: "HelpProcessPage",
  components: {
    BookList,
    RunHorse,
    HeaderTitle
  },
  data() {
    return {
      title: "推荐读物",
      NoDataMsg: resultMsg.WAITING_FOR_TEACHER
    };
  },
  async created() {
    await this.render();
  },
  computed: {
    studentCode() {
      return this.$store.state.student.studentCode;
    },
    classCode() {
      return this.$store.state.currentClass.classCode;
    },
    className() {
      return this.$store.state.currentClass.className;
    },
    recommendBooks() {
      return this.$store.state.recommendBooks;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push("/wonderful-moments");
    },
    async render() {
      let response = await API.getHelpProcessInfo(
        this.studentCode,
        this.classCode
      );
      if (response && response.recommendBooks) {
        this.$store.commit(
          mutation.RECOMMENDBOOKS,
          this.convertBooks(response.recommendBooks)
        );
      }
    },
    convertBooks(books) {
      let newBooks = [];
      if (books && books.length > 0) {
        const bookContent = books[0].Content;
        const bookArray = JSON.parse(bookContent);

        if (bookArray && bookArray.length > 0) {
          bookArray.forEach(item => {
            newBooks.push({
              bookName: item.bookName,
              author: item.author,
              imgSrc: item.imgSrc,
              description: item.description
            });
          });
        }
      }

      return newBooks;
    }
  }
};
</script>

<style scoped>
#HelpProcess-Page .bookList {
  height: 85%;
  overflow: auto;
}
</style>


