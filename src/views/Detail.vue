<template>
  <div v-if="Status">
    <div class="bannerDetail">
        <div class="logo p-3">
            <router-link to="/" class="text-dark">White House</router-link>
        </div>
        <div class="jumbotron row p-0">
            <div class="col-8 p-0">
                <a data-fancybox="images-preview" :href="DetailImg[0]">
                    <div style="height: 600px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${DetailImg[0]})`}"></div>
                    <!-- <img :src="image[0]" class="d-block w-100" alt="..." style="max-height:700px"> -->
                </a>
            </div>
            <div class="col-4 p-0">
                <div class="col-12 p-0">
                    <a data-fancybox="images-preview" :href="DetailImg[1]">
                        <div style="height: 300px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${DetailImg[1]})`}"></div>
                        <!-- <img :src="image[1]" class="d-block w-100" alt="..." style="max-height:350px"> -->
                    </a>
                </div>
                <div class="col-12 p-0">
                    <a data-fancybox="images-preview" :href="DetailImg[2]">
                        <div style="height: 300px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${DetailImg[2]})`}"></div>
                        <!-- <img :src="image[2]" class="d-block w-100" alt="..." style="max-height:350px"> -->
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="detail container mb-5">
        <div class="row mt-3">
            <div class="col-6">
                <h1>
                    {{ DetailRoom.name }}
                </h1>
                <div class="mt-4">
                    <ul class="pl-0">
                        <li>房間人數限制：{{ DetailRoom.descriptionShort.GuestMin }} - {{ DetailRoom.descriptionShort.GuestMax }}</li>
                        <li>床型： {{ DetailRoom.descriptionShort.Bed[0] }}</li>
                        <li>衛浴數量： {{ DetailRoom.descriptionShort['Private-Bath'] }}</li>
                        <li>房間大小： {{ DetailRoom.descriptionShort.Footage }} 平方公尺</li>
                    </ul>
                </div>
                <div>
                    {{ DetailRoom.description }}
                </div>
                <p class="mt-3">\ \ \</p>
                <div class="row mt-3">
                    <div class="col-6">
                        <h6>Check In</h6>
                        <h4>
                        {{ DetailRoom.checkInAndOut.checkInEarly }}
                        -
                        {{ DetailRoom.checkInAndOut.checkInLate }}
                        </h4>
                    </div>
                    <div class="col-6">
                        <h6>Check Out</h6>
                        <h4>
                            {{ DetailRoom.checkInAndOut.checkOut }}
                        </h4>
                    </div>
                </div>
                <div class="row p-3 mt-3 text-left" style="background: #F0F0F0" v-if="Status">
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Wi-Fi']">
                            <i class="fas fa-wifi"></i>
                            Wifi
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-wifi"></i>
                            Wifi
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities.Television">
                            <i class="fas fa-tv"></i>
                            電視
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-tv"></i>
                            電視
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Great-View']">
                            <i class="fas fa-mountain"></i>
                            景觀
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-mountain"></i>
                            景觀
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities.Breakfast">
                            <i class="fas fa-utensils"></i>
                            早餐
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-utensils"></i>
                            早餐
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Air-Conditioner']">
                            <i class="fas fa-wind"></i>
                            空調
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-wind"></i>
                            空調
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Smoke-Free']">
                            <i class="fas fa-smoking-ban"></i>
                            禁止吸菸
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-smoking-ban"></i>
                            禁止吸菸
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Mini-Bar']">
                            <i class="fas fa-glass-cheers"></i>
                            Mini Bar
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-glass-cheers"></i>
                            Mini Bar
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities.Refrigerator">
                            <i class="fas fa-igloo"></i>
                            冰箱
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-igloo"></i>
                            冰箱
                        </span>
                    </p>
                    <p class="col-4">
                        <span v-if="DetailRoom.amenities['Child-Friendly']">
                            <i class="fas fa-child"></i>
                            適合兒童
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-child"></i>
                            適合兒童
                        </span>
                    </p>
                    <p class="col-4 mb-0">
                        <span v-if="DetailRoom.amenities['Room-Service']">
                            <i class="fas fa-concierge-bell"></i>
                            Room Ser.
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-concierge-bell"></i>
                            Room Ser.
                        </span>
                    </p>
                    <p class="col-4 mb-0">
                        <span v-if="DetailRoom.amenities.Sofa">
                            <i class="fas fa-couch"></i>
                            沙發
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-couch"></i>
                            沙發
                        </span>
                    </p>
                    <p class="col-4 mb-0">
                        <span v-if="DetailRoom.amenities['Pet-Friendly']">
                            <i class="fas fa-dog"></i>
                            寵物攜帶
                        </span>
                        <span class="text-secondary" v-else>
                            <i class="fas fa-dog"></i>
                            寵物攜帶
                        </span>
                    </p>
                </div>
            </div>
            <div class="col-2">
                <div class="price text-right">
                    <div class="h2">
                      NT.{{ DetailRoom.normalDayPrice }}
                      <br />
                      <div class="h6 mt-2"  style="color: #6D7278; ">
                        平日(一～四)
                      </div>
                      <div class="h6">
                      NT.{{ DetailRoom.holidayPrice }}
                      </div>
                      <div class="h6 mt-2"  style="color: #6D7278;">
                        假日（五～日)
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-4">
                <div class="datepicker ml-3">
                    <datepicker :inline="true"></datepicker>
                </div>
                <div class="mt-3 ml-3">
                    <div class="btn btn-secondary" data-toggle="modal" data-target="#bookModal">預約時段</div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- <div class="modal-header">
                </div> -->
                <div class="modal-body">
                    <div class="container">
                    <div class="row">
                        <div class="col-12 row mb-3">
                            <div class="col-6 text-left">
                                <h4 class="modal-title" id="bookModalLabel">預約時段</h4>
                                <h6>\\\</h6>
                            </div>
                            <div class="col-6 text-right pr-0">
                                <button type="button" class="close text-right" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <div class="mb-3 col-12 row">
                            <div class="col-4 text-left">
                                姓名
                            </div>
                            <div class="col-8 p-1">
                                <input type="text" name="" id="" v-model="UserName">
                            </div>
                        </div>
                        <div class="mb-3 col-12 row">
                            <div class="col-4 text-left">
                            電話
                            </div>
                            <div class="col-8 p-1">
                                <input type="number" name="" id="" v-model="UserTel">
                            </div>
                        </div>
                        <div class="mb-3 col-12 row">
                            <div class="col-4 text-left">
                                預約起屹
                            </div>
                            <div class="col-8">
                                <div class="row">
                                    <datepicker input-class="col-12 p-0 text-center" wrapper-class="col-5 p-1" format="yyyy-MM-dd"></datepicker>
                                    <p class="pt-1">
                                        ~
                                    </p>
                                    <datepicker input-class="col-12 p-0 text-center" wrapper-class="col-5 p-1" format="yyyy-MM-dd"></datepicker>
                                </div>
                                <!-- <input type="text" class="col-4">
                                ~
                                <input type="text" class="col-4"> -->
                            </div>
                        </div>
                        <div class="container-fluid mb-2" style="background-color: #F0F0F0">
                            <div class="row p-3">
                                <div class="col-12 d-flex justify-content-between p-0 mb-2">
                                    <span class="align-middle">平日</span>
                                    <span class="align-middle">夜</span>
                                </div>
                                <div class="col-12 d-flex justify-content-between p-0">
                                    <span class="align-middle">假日</span>
                                    <span class="align-middle">夜</span>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="col-12 text-right p-0">
                                <p class="text-danger h1">
                                    = $3000
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer d-flext justify-content-between">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-dark" @click="Booking(DetailRoom.id)">確定預約</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="SuccessModal" tabindex="-1" aria-labelledby="SuccessModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- <div class="modal-header">
                </div> -->
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 row mb-3">
                                <div class="col-6 text-left">
                                    <h4 class="modal-title" id="SuccessModalLabel">預約時段</h4>
                                    <h6>\\\</h6>
                                </div>
                                <div class="col-6 text-right pr-0">
                                    <button type="button" class="close text-right" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="col-12 text-center">
                                    <i class="far fa-check-circle" style="color:#FFADE8C6"></i>
                                </div>
                            </div>
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
import datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm'
import axios from 'axios'
import $ from 'jQuery'
// import About from './About'

export default {
  data () {
    return {
      UserName: '',
      UserTel: '',
      date: ['2020-12-26', '2020-12-27']
    }
  },
  computed: {
    ...mapGetters([
      'DetailRoom',
      'DetailImg',
      'Status'
    ])
  },
  created: function () {
    this.$nextTick(function () {
      this.id = this.$route.params.id
      this.$store.dispatch(
        'GetDetailRoom',
        this.$route.params.id
      )
    })
  },
  components: {
    datepicker
  },
  methods: {
    Booking (id) {
      axios.request({
        method: 'post',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz?',
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer nmLEwrKuMtCBB81TBIlmRh1opY8riok9MZC8uy0tId7UxBoOLOlRkH0yiU8'
        },
        data: {
          name: this.UserName,
          tel: this.UserTel,
          date: this.date
        }
      })
        .then((response) => {
          $('#bookModal').modal('hide')
          $('#SuccessModal').modal('show')
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {})
    }
  }
}
</script>

<style lang="scss" scope>
body {
  font-family: NotoSansCJKtc-Light;
  ul li{
    list-style-type: none;
  }
}

.bannerDetail{
    position: relative;
    .logo{
        position: absolute;
        top: 4%;
        left: 2%;
        z-index: 111111;
        font-size: 20px;
        border: 1px solid #000;
        box-shadow: -10px -10px #000;
    }
}
</style>
