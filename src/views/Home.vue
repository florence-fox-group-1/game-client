<template>
  <div class="home">
    <div>
      <h1>Total Money You can get</h1>
      <h1>Rp. {{ totalPrizeMoney }},-</h1>
    </div>
    <div>
      <h3>Last Result = {{ result.num }} {{ result.color }}</h3>
    </div>
    <br>
    <div>
      <h5>Name</h5>
      <input type="text" placeholder="Your Name" v-model="name"><br>
      <h5>Your Money Rp. {{ yourMoney }},-</h5>
      <br>
      <div v-if="yourMoney == 0">
        <h3>Uangmu habis, sana cari Pinjol</h3>
      </div>
      <div v-else>
        <form @submit.prevent="betting">
        <input class="form-control" type="number" placeholder="Your Bet" min="1" :max=yourMoney v-model="bet"><br>
        <select v-model="num">
          <option
          v-for="prob in probability" :key="prob.num"
          >
          {{ prob.num}}
          </option>
        </select>
        <button type="submit">Bet</button>
      </form>
      </div>
    </div>
    <br><br>
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
      num: ''
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
    betting () {
      this.$socket.emit('betting', { name: this.name, bet: this.bet, num: this.num })
    }
  },
  sockets: {
    connect () {
      console.log('connected to socket.io')
    }
  }
}
</script>
