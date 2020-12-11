<template>

  <div class="image" :style="image">
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
              <div class="col-4">
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
      image: { backgroundImage: 'url(https://previews.123rf.com/images/stockstudio44/stockstudio441706/stockstudio44170600301/81016243-casino-blurred-background-roulette-and-stacks-of-chips-.jpg)' }
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
