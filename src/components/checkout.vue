<style scoped>
    body {
        background-color: #ff0000;
    }
</style>

<template>
  <div>
    <h2>Checkout</h2>
    <div>Confirmation</div>

    <div>
      <div>
        Name : {{ info.name }}
      </div>
      <div>
        Email : {{ info.email }}
      </div>
      <div>
        Num : {{ info.addressNum }}
      </div>
      <div>
        Address : {{ info.addressStreet }}
      </div>
      <div>
        City : {{ info.addressCity }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'checkout',
    data () {
      return {
        info: Object.assign({
          name: '',
          email: '',
          addressNum: '',
          addressStreet: '',
          addressCity: ''
        }, this.$route.query)
      }
    }
  }
</script>
