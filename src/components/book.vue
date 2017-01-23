<template >
    <div class="book">
      <img :src="book.cover"  />
      <div>
      <h5 class="title" style="display:inline-block">{{book.title}}</h5>
      <h5 class="price" style="display:inline-block">{{book.price}}</h5>
      <button type="button" style="display:block" class="btn btn-success"
        @click="addToBasket(book)">Add to Basket
      </button>
      </div>
    </div>
</template>
<style scoped>

  .book {
    flex-grow: 1;
  }
  h4 {
    font-weight: bold;
  }

  img {
    width: 150px;
  }
  .title {
    color: blue;
    flex-grow: 2;
  }
  .price {
  flex-grow: 1;
  }
</style>
<script>
import BasketService from '../service/basket-service'
export default{
  name: 'book',
  props: ['book'],
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    addToBasket: function (book) {
      console.log(book)
      BasketService.addBook(book)
    }
  },
  components: {
  }
}
</script>
