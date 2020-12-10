import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
    totalPrizeMoney: 0,
    yourMoney: 0,
    probability: {},
    result: {}
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.history = payload.history
      state.totalPrizeMoney = payload.totalPrizeMoney
      state.probability = payload.probability
      state.yourMoney = 100000
    },
    SOCKET_messageWrong (state, payload) {
      state.history.unshift({ message: payload.message })
      state.totalPrizeMoney += +payload.bet
    },
    SOCKET_resultWrong (state, payload) {
      state.yourMoney -= +payload.bet
    },
    SOCKET_resultRight (state, payload) {
      state.yourMoney += +payload.gain
      state.totalPrizeMoney = 50000
    },
    SOCKET_messageRight (state, payload) {
      state.history.unshift({ message: payload.message })
    },
    SOCKET_message (state, payload) {
      state.history.unshift({ message: payload.message })
    },
    SOCKET_result (state, payload) {
      state.result = payload.result
    },
    SET_USERNAME (state, payload) {
      state.username = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
