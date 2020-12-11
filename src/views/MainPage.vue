<template>
  <div id="backgroundImg" class="image w-100">
    <div class="" >
      <div class="row" style="height: 90vh;">
        <div class="col" >
          <TotalPrizeMoney style="margin-top: 90px; margin-left:50px"></TotalPrizeMoney>
        </div>
        <div class="col-6">
          <!-- <Result></Result> -->
          <Process></Process>
        </div>
        <div class="col">
          <History style="margin-top: 90px; margin-right:50px"></History>
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
