<template>
  <div>
    <b-card
      title="Total Prize Money"
      img-src="https://i.pinimg.com/originals/f6/6a/56/f66a56d55a5342812cc6ee8d1d6c262a.jpg"
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
