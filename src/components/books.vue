<style scoped>
 .panel-body {
    display: flex; /* or inline-flex */
    flex-flow: row wrap;
    justify-content: flex-start;
  }
</style>

<template>
  <div class="panel panel-info">
    <div class="panel-heading">
      <h2>Books</h2>
    </div>
    <div class="panel-body">
      <book  v-for="item in books" :book="item"></book>
    </div>
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
      .then(books => { this.books = books })
    },
    components: {
      Book
    }
  }
</script>
