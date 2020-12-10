<template>
  <div class="mainpage">
    <div class="" >
      <div class="row" style="height: 90vh;">
        <div class="col" >
          <h4>Hi player</h4>
          <TotalPrizeMoney style="margin-top: 90px;"></TotalPrizeMoney>
        </div>
        <div class="col-6">
          <Result></Result>
        </div>
        <div class="col">One of three columns</div>
      </div>
    </div>
  </div>
</template>

<script>
import TotalPrizeMoney from '../components/TotalPrizeMoney'
// import HelloWorld from '../components/HelloWorld'
import Result from '../components/Result'

export default {
  name: 'MainPage',
  components: {
    TotalPrizeMoney,
    Result
  }
}
</script>

<style>

</style>
