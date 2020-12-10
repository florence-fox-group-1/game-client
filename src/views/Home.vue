<template>
  <div class="home">
    <div>
      <h1>Total Money You can get</h1>
      <h1>Rp. {{ totalPrizeMoney }},-</h1>
    </div>
    <div>
      <button @click="play">Play Game</button>
      <h1>Last Result = {{ result }}</h1>
    </div>
    <div>
      <h4>Name</h4>
      <input type="text" placeholder="Your Name" v-model="name"><br>
      <h4>Your Money Rp. {{ yourMoney }},-</h4>
      <div v-if="yourMoney == 0">
        <h1>Uangmu habis, sana cari Pinjol</h1>
      </div>
      <div v-else>
        <form @submit.prevent="betting">
        <input type="number" placeholder="Your Bet" min="1" :max=yourMoney style="width:200px" v-model="bet"><br>
        <select v-model="num">
          <option
          v-for="prob in probability" :key="prob.num"
          >
          {{ prob.num }}
          </option>
        </select>
        <button type="submit">Bet</button>
      </form>
      <hr>
      <form @submit.prevent="bettingColor">
        <input type="number" placeholder="Your Bet" min="1" :max=yourMoney style="width:200px" v-model="bet"><br>
        <select v-model="color">
          <option value="red">
            Red
          </option>
          <option value="black">
            Black
          </option>
        </select>
        <button type="submit">Bet</button>
      </form>
      </div>
    </div>
    <div>
        <h1>HISTORY</h1>
        <p
        v-for="(msg, id) in history" :key="id"
        >{{ msg.message }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      bet: '',
      num: '',
      color: ''
    }
  },
  computed: {
    history () {
      return this.$store.state.history
    },
    totalPrizeMoney () {
      return this.$store.state.totalPrizeMoney
    },
    yourMoney () {
      return this.$store.state.yourMoney
    },
    probability () {
      return this.$store.state.probability
    },
    result () {
      return this.$store.state.result
    }
  },
  methods: {
    play () {
      this.$socket.emit('play')
    },
    betting () {
      this.$socket.emit('betting', { name: this.name, bet: this.bet, num: this.num })
    },
    bettingColor () {
      this.$socket.emit('bettingByColor', { name: this.name, bet: this.bet, color: this.color })
    }
  },
  sockets: {
    connect () {
      console.log('connected to socket.io')
    }
  }
}
</script>
