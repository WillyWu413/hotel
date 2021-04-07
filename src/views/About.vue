<template>
  <div class="about">
    <div class="banner">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/Homepage.jpeg" class="d-block w-100" alt="..." style="height: 700px">
          </div>
          <div class="carousel-item" v-for="(item) in AllRoom" :key="item.id">
            <img :src="item.imageUrl" class="d-block w-100" alt="..." style="height: 700px">
          </div>
          <div class="mt-5 MainInfo">
            <div class="infoBlock">
              <div class="logo text-center">
              <h1 class="text-light">White House</h1>
            </div>
              <div class="mt-5 text-light row">
                <div class="col-4 text-right">
                  <a href="" class="h3 mr-2">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="" class="h3">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="col-8 text-left info">
                  <ul class="address p-0">
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
    <div class="container">
      <div class="row RoomList ml-5">
          <div class="card mr-3 mb-3" v-for="(item) in AllRoom" :key="item.id" style="width:30%" @click="goDetail(item.id)">
            <!-- <router-link to="/detail"> -->
              <img :src=item.imageUrl class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">
                  {{ item.name }}
                </h5>
                <div class="d-flex justify-content-between price">
                  <div class="price">
                    <div class="h4">
                      NT.{{ item.normalDayPrice }}
                      <span class="h6">
                        平日
                      </span>
                      <span class="text-right ml-4" style="color: #6D7278; font-size: 10px">
                      NT.{{ item.holidayPrice }} 假日
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </router-link> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
// import $ from 'jQuery'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'AllRoom'
    ])
    // AllRoom () {
    //   if (!this.AllRoom) {
    //     return [...this.AllRoom]
    //   } else {
    //     return ''
    //   }
    // }
  },
  created () {
    this.$store.dispatch('GetAllRoom')
  },
  methods: {
    goDetail (id) {
      this.$router.push({ name: 'Detail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scope>
body{
  font-family: NotoSansCJKtc-Light;
  a{
    text-decoration: none;
    color: #000
  }
  a:hover{
    text-decoration: none;
    color: #000
  }
}

.about {
  .banner {
    // background: url(../assets/hotel1.jpeg) no-repeat;
    // width: 100%;
    // height: 300pt;
    // background-size: cover;
    // background-position: 50%;
    height: 660px;
    position: relative;
    .info {
      border-left: 2px solid #ffffff;
    }
  }
}

.MainInfo{
  .infoBlock{
    position: absolute;
    top: 25%;
    left: 33%;
  }
  .logo {
    width: 148px;
    height: 148px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #FFFFFF;
    box-shadow: -15px -15pt rgba(255, 255, 255, 0.3);
    margin-left: 35%;
    h1 {
      font-family: NotoSansCJKtc-Medium;
      font-size: 30px;
      margin-top: 35px;
    }
  }
}

.RoomList {
  margin-top: -100px;
  img {
    background-position: cover;
    height: 300px;
  }
  .price {
    vertical-align: text-bottom;
  }
}
</style>
