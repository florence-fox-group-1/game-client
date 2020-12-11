<template>
   <div class="text-white" >
        <h1><strong>HISTORY</strong></h1>
        <div class="container overflow-auto rounded p-3 mb-2 bg-info text-white" style="height: 380px;">
            <p
            v-for="(msg, id) in history" :key="id" class="border border-light rounded"
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
