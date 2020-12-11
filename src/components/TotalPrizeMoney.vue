<template>
  <div>
    <b-card
      title="Total Prize Money"
      img-src="https://image.freepik.com/free-vector/businessman-happy-get-money-reward-flat-design_27794-4.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
    <h5>Rp {{ totalPrizeMoney.toLocaleString('id') }}</h5>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prizeMoney: 900000000
    }
  },
  computed: {
    totalPrizeMoney () {
      return this.$store.state.totalPrizeMoney
    }
  }
}
</script>

<style>
</style>
