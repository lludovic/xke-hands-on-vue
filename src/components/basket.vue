<style scoped>
    body{
        background-color:#ff0000;
    }
</style>

<template>
  <div>
    <h2>Basket</h2>
    <div>My order</div>

    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.quantity * item.price }}</td>
        </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="3"></td>
        <td>{{ total }}</td>
      </tr>
      </tfoot>
    </table>

  </div>
</template>

<script>
  import BasketService from '../service/basket-service'

  export default{
    name: 'basket',
    data () {
      return {
        msg: 'hello vue',
        books: BasketService.getItems(),
        total: BasketService.getTotal()
      }
    },
    components: {
    }
  }
</script>
