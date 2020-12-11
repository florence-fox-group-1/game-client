<template>
  <div>
    <button
      type="button"
      class="btn btn-success"
      @click="countDownTimer"
      v-if="countDown > 0"
    >
      Play Game
    </button>
    <button
      v-else
      type="button"
      class="btn btn-secondary ml-2"
      @click="resetTimer"
    >
      Reset
    </button>
    <h2 class="mt-5 mb-5 text-white" v-if="countDown > 0">{{ countDown }}s</h2>
    <h2 class="mt-5 mb-5 text-white" v-else>Its a {{ color }}</h2>
    <!-- <div class="card text-black bg-light mb-3 ml-5 mr-5 mt-5" v-if="countDown === 0" >
      <div class="card-header"><strong>RESULT</strong></div>
      <div class="card-body">
        <h5 class="card-title">{{ color }}</h5>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      countDown: 2,
      colors: ['Red', 'Black', 'Green'],
      color: ''
    }
  },
  methods: {
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
      const rand = Math.floor(Math.random() * 3)
      this.color = this.colors[rand]
    },
    resetTimer () {
      this.countDown = 2
    }
  }
}
</script>

<style>
</style>
