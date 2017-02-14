<style scoped>
    body{
        background-color:#ff0000;
    }


</style>

<template>
  <div>
    <h2>Order</h2>
    <div>My order</div>

    <form action="toto">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Name" v-model="info.name">
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Email" v-model="info.email">
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Num" v-model="info.addressNum">
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Street" v-model="info.addressStreet">
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="City" v-model="info.addressCity">
      </div>

      <button @click="order()" type="button">Go</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'basket',
    data () {
      return {
        info: {
          name: '',
          email: '',
          addressNum: '',
          addressStreet: '',
          addressCity: ''
        }
      }
    },
    created () {
    },
    methods: {
      order () {
        this.$router.push({ path: '/checkout', query: this.info })
      }
    },
    components: {
    }
  }

</script>
