<template>
   <div class="text-white" >
        <h1>HISTORY</h1>
        <div class="container overflow-auto" style="height: 400px;">
            <p
            v-for="(msg, id) in history" :key="id" class="border border-primary"
            >{{ msg.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'History',
  computed: {
    history () {
      return this.$store.state.history
    }
  },
  created () {
    console.log(history, 'ini history')
  }
}
</script>

<style>

</style>
