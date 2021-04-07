import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// const token = 'nmLEwrKuMtCBB81TBIlmRh1opY8riok9MZC8uy0tId7UxBoOLOlRkH0yiU8'

export default new Vuex.Store({
  getters: {
    AllRoom: state => state.AllRoom,
    DetailRoom: state => state.DetailRoom,
    DetailImg: state => state.DetailImg,
    Status: state => state.Status
  },
  state: {
    AllRoom: {},
    DetailRoom: {},
    DetailImg: {},
    Status: false
  },
  mutations: {
    Mu_GetAllRoom (state, req) {
      state.AllRoom = req
    },
    Mu_GetDetailRoom (state, req) {
      state.DetailRoom = req
    },
    Mu_GetDetailImg (state, req) {
      state.DetailImg = req
    },
    Mu_Status (state, req) {
      state.Status = req
    }
  },
  actions: {
    GetAllRoom ({ commit }) {
      axios({
        method: 'GET',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer nmLEwrKuMtCBB81TBIlmRh1opY8riok9MZC8uy0tId7UxBoOLOlRkH0yiU8'
        }
      })
        .then((response) => {
          this.AllRoom = response.data.items
          commit('Mu_GetAllRoom', response.data.items)
          console.log(this.AllRoom)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {})
    },
    GetDetailRoom ({
      commit
    }, id) {
      axios({
        method: 'GET',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          Authorization:
            'Bearer nmLEwrKuMtCBB81TBIlmRh1opY8riok9MZC8uy0tId7UxBoOLOlRkH0yiU8'
        }
      })
        .then((response) => {
          this.DetailRoom = response.data.room[0]
          this.DetailImg = response.data.room[0].imageUrl
          this.Status = true
          commit('Mu_GetDetailRoom', response.data.room[0])
          commit('Mu_GetDetailImg', response.data.room[0].imageUrl)
          commit('Mu_Status', true)
          console.log(response.data.room)
          console.log(response.data.booking)
        })
        .catch((error) => {
          console.log(error.response)
        })
        .finally(() => {})
    }
  }
})
