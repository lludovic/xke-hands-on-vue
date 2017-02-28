<style scoped>

</style>

<template>
  <div class="panel panel-info">
    <div class="panel-heading">
      <h2>Basket</h2>
    </div>

    <div class="panel-body">
      <h3>My order</h3>

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
            <td>{{ total }}</td>
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
  </div>
</template>

<script>
  import BasketService from '../service/basket-service'

  export default {
    name: 'basket',
    data () {
      return {
        books: BasketService.getItems(),
        total: BasketService.getTotal()
      }
    },

    /* utilisation de watch */
    /* utilisation de computed */

    created () {
      this.refresh()
    },
    updated () {
      this.refresh()
    },
    methods: {
      refresh () {
        this.total = BasketService.getTotal()
      },
      quantityChanged () {
        BasketService.persist()
      },
      removeItem (item) {
        BasketService.removeBook(item)
      }
    },
    components: {
    }
  }
</script>
