<style scoped>
    body{
        background-color:#ff0000;
    }


</style>

<template>
  <div>
    <h2>Basket</h2>
    <div>My order</div>

    <div v-if="books.length === 0">
      Cart empty.
    </div>

    <div v-if="books.length > 0">
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
          <td><input type="number" v-model="item.quantity" @change="quantityChanged()" min="1"/>
            <i class="glyphicon glyphicon-remove" role="button" title="Delete item" @click="removeItem(item)"></i>
          </td>
          <td>{{ item.quantity * item.price }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="3"></td>
          <td>{{ total.oldtotal }} {{ total.total }}</td>
        </tr>
        </tfoot>
      </table>
    </div>
    <div>
      <router-link to="/order" tag="button" class="btn btn-success">
        Order
      </router-link>
    </div>
  </div>
</template>

<script>
  import BasketService from '../service/basket-service'

  export default {
    name: 'basket',
    data () {
      return {
        msg: 'hello vue',
        books: BasketService.getItems(),
        total: BasketService.getTotal()
      }
    },
    created () {
      this.refreshTotal()
    },
    methods: {
      refreshTotal () {
        BasketService.performTotal()
          .subscribe(total => { this.total = total })
      },
      quantityChanged () {
        BasketService.persist()
        this.refreshTotal()
      },
      removeItem (item) {
        BasketService.removeBook(item)
        this.refreshTotal()
      }
    },
    components: {
    }
  }

</script>
