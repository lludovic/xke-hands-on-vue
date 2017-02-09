<style scoped>
 .container {
    display: flex; /* or inline-flex */
    flex-flow: row wrap;
    justify-content: flex-start;
  }
</style>

<template>
  <div class="container">
    <book  v-for="item in books" :book="item"></book>
  </div>
</template>

<script>
  import BookService from '../service/book-service'
  import Book from './book'

  export default{
    name: 'books',
    data: function () {
      return {
        msg: 'hello vue 2',
        books: []
      }
    },
    created: function () {
      BookService.getBooks()
      .subscribe(books => { this.books = books })
    },
    components: {
      Book
    }
  }
</script>
