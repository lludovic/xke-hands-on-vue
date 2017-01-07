<template>
  <div class="container">
    <book  v-for="item in books" :book="item"></book>
  </div>
</template>
<style scoped>
 .container {
  display: flex; /* or inline-flex */
  flex-flow: row wrap;
  justify-content: flex-start;
  }
</style>
<script>
  import {RxHttpRequest} from 'rx-http-request'
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
      const defaultHttp = RxHttpRequest.defaults({withCredentials: false, json: true})
      defaultHttp.get('http://henri-potier.xebia.fr/books')
      .subscribe(data => { this.books = data.body })
    },
    components: {
      Book
    }
  }
</script>
