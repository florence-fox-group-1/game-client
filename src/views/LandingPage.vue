<template>
<div class="container" id="SignIn">
    <div class="input form">
    <div class="row justify-content-center">
      <div class="col-4">
      <form id="signin" @submit.prevent="login">
        <h1>Input Username</h1>
        <br />
        <div class="form-group rounded">
          <label for="input-username">Username</label><br>
          <input
            v-model="username"
            type="username"
            class="form-control"
            id="input-username"
            aria-describedby="username"
          />
          <br>
          <small id="username" class="form-text text-muted"
            >Play the game and be famous.</small
          >
        </div>
        <br>
        <button type="submit" class="btn btn-outline-success inputButton">
          Submit
        </button>
      </form>
      <br><br>
      <hr>
      <div>
        <h2>TOGEL MANIA MANTAP!!!</h2>
        <br>
        <p>Terdapat 2 tipe permainan, yaitu Bet Number dan Bet Color.
          Bet Number akan otomatis mempertaruhkan seluruh uangmu, tapi hadiahnya adalah seluruh Total Money Prize.
          Bet Color akan mempertaruhkan uang yang kamu input, tapi hadiahnya senilai uang yang kamu pertaruhkan tadi.
          Klik tombol Start Game agar bandar mulai memutar papan roulette.
          Papan roulette akan berputar selama 15 detik, jadi gunakan waktu tersebut untuk mempertaruhkan uangmu.</p>
          <h3>Have Fun!</h3>
      </div>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('ticket', 123)
      this.$store.commit('SET_USERNAME', this.username)
      this.$router.push({ name: 'MainPage' })
    }
  }
}
</script>
