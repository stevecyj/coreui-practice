<template>
  <div class="wrapper" style="margin-top: 25px">
    <div class="animated fadeIn">
      <div>
        <transition name="fade">
          <loading v-if="isLoading"></loading>
        </transition>
      </div>
      <b-row>
        <b-col md="12">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <!-- <i class="fa fa-align-justify"></i> -->
              <strong>我的 Apps 下載排行</strong>
              <!-- <small>custom content</small> -->
            </div>
            <b-list-group v-for="event in events" v-bind:key="event.id">
              <b-list-group-item
                href="#"
                class="flex-column align-items-start"
                @click="Detail(event.id)"
              >
                <b-media left-align vertical-align="center">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{event.appName}}</h5>
                    <small class="text-muted">下載次數 :{{event.downloadTimes}}</small>
                    <small class="text-muted">上傳時間 :{{event.created_at}}</small>
                    <small class="text-muted" v-if="event.verify===1">審核狀態 : 通過</small>
                    <small class="text-muted" v-if="event.verify===2">審核狀態 : 退回</small>
                    <small class="text-muted" v-if="event.verify===3">審核狀態 : 待審核</small>
                  </div>
                  <template v-slot:aside>
                    <b-img
                      v-bind:src="event.appIcon"
                      class="img-circle"
                      width="120"
                      alt="placeholder"
                    ></b-img>
                  </template>
                  <p class="mb-0" style="margin-top: 10px">{{event.summary}}</p>
                  <small class="text-muted" v-if="event.device==='android'">作業系統 ： Android</small>
                  <small class="text-muted" v-if="event.device==='ios'">作業系統 ： iOS</small>
                </b-media>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Loading from "@/views/loading";
import EventService from "@/service/EventService.js";
export default {
  components: {
    Loading
  },
  // name: "list-groups"
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      events: [],
      isLoading: true
    };
  },
  created() {
    this.axios
      .get(
        "https://cyappstore.azurewebsites.net/api/develop/appRank/" +
          this.userId
      )
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
        console.log(this.events);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  mounted() {
    const me = this;
    // 初始化頁面
    // me.loadPageData();
    this.isLoading = true;
  },
  methods: {
    Detail(id) {
      const vm = this;
      // this.axios
      //   .get("http://127.0.0.1:8000/api/member/App/" + id)
      EventService.appImg(id).then(function(response) {
        console.log(response.data);
        sessionStorage.setItem("appImg1", response.data[0].screenShot);
        sessionStorage.setItem("appImg2", response.data[1].screenShot);
      });
      EventService.App(id).then(function(response) {
        var appData = response.data;
        sessionStorage.setItem("appId", appData.id);
        sessionStorage.setItem("appName", appData.appName);
        sessionStorage.setItem("appIcon", appData.appIcon);
        sessionStorage.setItem("appVersion", appData.version);
        sessionStorage.setItem("appSummary", appData.summary);
        sessionStorage.setItem("appIntroduction", appData.introduction);
        // console.log(appData);
        if (id == appData.id) vm.$router.push("/managers/appdetail");
      });
    }
    // loadPageData: function() {
    //   // axios 請求頁面資料 .then 中修改狀態值  this.isLoading = false
    //   this.axios
    //     .get("http://127.0.0.1:8000/api/develop/appRank/2")
    //     .then((this.isLoading = false));
    // }
  }
};
</script>
<style scoped>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>