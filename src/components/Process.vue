<template>
   <div class="home text-white">
    <!-- <div>
      <h1>Total Money You can get</h1>
      <h1>Rp. {{ totalPrizeMoney.toLocaleString('id') }},-</h1>
    </div> -->
    <div>
      <button @click="play" class="btn btn-success btn-lg mt-4" >Roll The Table</button>
      <!-- <button @click="reset" class="btn btn-info mt-4" v-else>Reset</button> -->
      <h1 class="mt-4 text-primary"><span v-if="typeof result === 'string' && result !== ''">Last Result :</span> {{ result }}</h1>
    </div>
    <div style="margin-top:100px">
      <h4>Name</h4>
      <input type="text" placeholder="Your Name" v-model="name"><br><br>
      <h2 class="border border-danger bg-dark text-danger w-auto mb-3 w-25">Your Money Rp. {{ yourMoney.toLocaleString('id') }},-</h2>
      <div v-if="yourMoney == 0 || yourMoney < 0">
        <h1>Uangmu habis, sana cari Pinjol</h1>
      </div>
      <div v-else>
        <div>
            <div class="input-group mb-3 w-50 m-auto">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Choose Bet Category</label>
                </div>
                <b-form-select v-model="selected" :options="options" id="inputGroupSelect01" class="custom-select">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                </b-form-select>

                <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                <!-- <select class="custom-select" id="inputGroupSelect01">
                    <option >Choose...</option>
                    <option v-if="selected">Number guessing</option>
                    <option :value="category.colors">Color guessing</option>
                </select> -->
          </div>

            <form @submit.prevent="betting" v-if="selected === 'A'" class="mt-5">
            <h3>Total Bet</h3>
            <input class="form-control m-auto" type="number" placeholder="Your Bet" min="1" :max=yourMoney style="width:200px" :value="bet.toLocaleString('id')" disabled><br>
            <select v-model="num" class="custom-select custom-select-lg-sm w-auto">
            <option value="" disabled>-- Choose number --</option>
            <option
            v-for="prob in probability" :key="prob.num"
            >
            {{ prob.num }}
            </option>
            </select><br><br>
            <button type="submit" class="btn btn-primary">Bet</button>
            </form>
            <hr>
            <form @submit.prevent="bettingColor" v-if="selected === 'B'">
                <input class="form-control m-auto" type="number" placeholder="Your Bet" min="1" :max=yourMoney style="width:200px" v-model="bet2"><br>
                <select v-model="color" class="custom-select custom-select-lg-sm w-auto">
                <option value="" disabled>-- Choose colors --</option>
                <option value="red">
                    Red
                </option>
                <option value="black">
                    Black
                </option>
                </select><br><br>
                <button class="btn btn-primary" type="submit">Bet</button>
            </form>

        </div>
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
      bet: 100000,
      bet2: '',
      num: '',
      color: '',
      category: {
        numbers: true,
        colors: true
      },
      selected: null,
      options: [
        { value: 'A', text: 'Bet Numbers' },
        { value: 'B', text: 'Bet Colors' }
      ]
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
      this.$socket.emit('bettingByColor', { name: this.name, bet: this.bet2, color: this.color })
    },
    reset () {
      this.result = 5
    }
  },
  sockets: {
    connect () {
      console.log('connected to socket.io')
    }
  }
}
</script>
