<template >
    <div class="book">
      <img :src="book.cover"  />
      <h4 class="title">{{book.title}}</h4>
      <h4 class="price">{{book.price}}</h4>
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
    width: 200px;
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
  export default{
    name: 'book',
    props: ['book'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    }
  }
</script>
