<template>
  <div class="mainpage">
    <div class="" >
      <div class="row" style="height: 90vh;">
        <div class="col" >
          <h4>Hi player</h4>
          <TotalPrizeMoney style="margin-top: 90px; margin-left:50px"></TotalPrizeMoney>
        </div>
        <div class="col-6">
          <Result></Result>
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
import Result from '../components/Result'
import Process from '../components/Process'
import History from '../components/History'

export default {
  name: 'MainPage',
  components: {
    TotalPrizeMoney,
    Result,
    Process,
    History
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
