<template>
  <div>
    <div id="backgroundImg" class="image w-100">
      <div class="" >
        <div class="row" style="height: 80vh;">
          <div class="col" >
            <TotalPrizeMoney style="margin-top: 90px; margin-left:50px"></TotalPrizeMoney>
          </div>
          <div class="col-6">
            <!-- <Result></Result> -->
          <div class="container">
            <div class="input form">
              <div class="row justify-content-center">
                <div class="">
                  <Process></Process>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="col">
            <History style="margin-top: 90px; margin-right: 50px"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TotalPrizeMoney from '../components/TotalPrizeMoney'

// import HelloWorld from '../components/HelloWorld'
// import Result from '../components/Result'

import Process from '../components/Process'
import History from '../components/History'

export default {
  name: 'MainPage',
  components: {
    TotalPrizeMoney,
    // Result,
    Process,
    History
  },
  data () {
    return {
      image: { backgroundImage: 'url(https://static1.bigstockphoto.com/2/9/2/large1500/292557460.jpg)' }
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  },
  created () {
    if (this.username === '') {
      localStorage.clear()
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}

#show_bg {
    /* background-image: url('images/background.jpg'); */
    width: 80%;
    height: 200px;
    background-size: cover;
    color: white;
}

#backgroundImg {
  background-image: url('https://static1.bigstockphoto.com/2/9/2/large1500/292557460.jpg');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
