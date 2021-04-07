<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/Homepage.jpeg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="homepage" v-bind:style="{ 'background-image': 'url(' + AllRoom[1].imageUrl + ')' }">
      <div class="container-fluid">
        <div class="row">
          <div class="col left_menu">
            <div class="logo text-center mt-5 ml-5">
              <h1 class="text-light">
                <router-link to="/about">White House</router-link>
              </h1>
            </div>
            <div class="RoomID ml-5">
              <h2>
                <span class="RoomNum h2">04</span>
                <br />
                <p class="h2">Deluxe Double Room</p>
              </h2>
            </div>
          </div>
          <div class="col"></div>
          <div class="col right_block pr-0">
            <!-- 右側的選單欄 -->
            <div>
              <ul class="list-group side_menu mt-5">
                <li class="list-group-item" v-for="(item) in AllRoom" :key="item.id">
                  <a href=""> {{ item.name }} </a>
                </li>
              </ul>
              <div class="mt-5 text-light">
                <a href="" class="h3 mr-2">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="" class="h3">
                  <i class="fab fa-instagram"></i>
                </a>
                <ul class="address pl-0 mt-3">
                  <li>
                    <i class="fas fa-phone"></i>
                    02-17264937
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    whitespace@whitespace.com.tw
                  </li>
                  <li>
                    <i class="fas fa-home"></i>
                    台北市羅斯福路十段30號
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/javascript'>
// import axios from 'axios'
import { mapGetters } from 'vuex'
// import axios from 'axios'
// import About from './About'
export default {
  data () {
    return {
      UserName: '',
      UserTel: ''
    }
  },
  computed: {
    ...mapGetters([
      'AllRoom'
    ])
  },
  created: function () {
    this.$store.dispatch('GetAllRoom')
  }
}
</script>
