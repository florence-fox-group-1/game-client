<template>
   <div class="home text-white">
    <!-- <div>
      <h1>Total Money You can get</h1>
      <h1>Rp. {{ totalPrizeMoney.toLocaleString('id') }},-</h1>
    </div> -->
    <div>
      <button class="btn btn-success btn-lg btn-block" @click="play">Play Game</button>
      <h1><span v-if="typeof result === 'string' && result !== ''">Last Result :</span> {{ result }}</h1>
    </div>
    <div style="margin-top:50px">
      <h4><strong>Name</strong></h4>
      <input class="form-control" type="text" placeholder="Your Name" v-model="name"><br>
      <h4>Your Money <strong>Rp.{{ yourMoney }},-</strong></h4>
      <div v-if="yourMoney == 0">
        <h1>Uangmu habis, sana cari Pinjol</h1>
      </div>
      <div v-else>
        <form @submit.prevent="betting">
        <input class="form-control" type="number" placeholder="Your Bet" min="1" :max=yourMoney v-model="bet"><br>
        <select class="form-control" v-model="num">
          <option
          v-for="prob in probability" :key="prob.num"
          >
          {{ prob.num }}
          </option>
        </select>
        <br>
        <button class="btn btn-info btn-lg btn-block" type="submit">Bet</button>
      </form>
      <br><br>
      <form @submit.prevent="bettingColor">
        <input class="form-control" type="number" placeholder="Your Bet" min="1" :max=yourMoney v-model="bet2"><br>
        <select class="form-control" v-model="color">
          <option value="red">
            Red
          </option>
          <option value="black">
            Black
          </option>
        </select>
        <br>
        <button class="btn btn-info btn-lg btn-block" type="submit">Bet</button>
      </form>
      </div>
    </div>
    <!-- <div>
        <h1>HISTORY</h1>
        <p
        v-for="(msg, id) in history" :key="id"
        >{{ msg.message }}</p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      bet: '',
      bet2: '',
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
    },
    nextTick () {
      this.$router.push({ name: 'LandingPage' })
    }
  },
  sockets: {
    connect () {
      console.log('connected to socket.io')
    }
  }
}
</script>
