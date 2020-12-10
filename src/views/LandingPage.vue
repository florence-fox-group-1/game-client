<template>
<div class="container" id="SignIn">
    <div class="input form">
    <div class="row justify-content-center">
      <div class="col-4">
      <form id="signin" @submit.prevent="login">
        <h1>Login</h1>
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
            >We'll never share your email with anyone else.</small
          >
        </div>
        <br>
        <button type="submit" class="btn btn-outline-dark inputButton">
          Log In
        </button>
      </form>
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
      this.$store.commit('SET_USERNAME', this.username)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
