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
              <b-list-group-item href="#" class="flex-column align-items-start">
                <b-media left-align vertical-align="center">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{event.appName}}</h5>
                    <small class="text-muted">下載次數 :{{event.downloadTimes}}</small>
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
                  <!-- <small class="text-muted">Donec id elit non mi porta.</small> -->
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
        "http://cyappstore.azurewebsites.net/api/develop/appRank/" + this.userId
      )
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
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