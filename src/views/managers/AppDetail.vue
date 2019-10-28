<template>
  <div class="animated fadeIn" style="margin-top: 25px">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <b-card no-body class="card-default">
      <div class="container-fluid">
        <div class="media" style="margin-top: 30px; margin-bottom: 15px">
          <img
            class="img-circle"
            v-bind:src="appIcon"
            style="margin-right: 20px"
            width="120px"
            height="120px"
          />
          <div class="media-body">
            <div class="d-flex w-100 justify-content-between" style="margin-bottom: 15px">
              <h3 class="mb-1">
                <b>{{appName}}</b>
              </h3>
              <small class="text-muted">
                <b>版本號：{{appVersion}}</b>
              </small>
            </div>
            <h5>{{appSummary}}</h5>
          </div>
        </div>
        <hr />
        <div style="margin-top: 15px; margin-bottom: 15px">
          <img
            class="img-rounded"
            v-bind:src="appImg1"
            style="margin-right: 20px"
            width="180px"
            height="240px"
          />
          <img
            class="img-rounded"
            v-bind:src="appImg2"
            style="margin-right: 20px"
            width="180px"
            height="240px"
          />
        </div>
        <hr />
        <div style="margin-top: 15px; margin-bottom: 15px">
          <h5>{{appIntroduction}}</h5>
        </div>
        <hr />
        <div style="margin-top: 15px; margin-bottom: 17px; text-align: right">
          <button type="button" class="btn btn-outline-dark" @click="backTop">
            <b>回上一頁</b>
          </button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Loading from "@/views/loading";
export default {
  components: {
    Loading
  },
  data() {
    return {
      appName: sessionStorage.getItem("appName"),
      appVersion: sessionStorage.getItem("appVersion"),
      appSummary: sessionStorage.getItem("appSummary"),
      appIntroduction: sessionStorage.getItem("appIntroduction"),
      appIcon:
        "http://cyappstore.azurewebsites.net" +
        sessionStorage.getItem("appIcon"),
      appImg1:
        "http://cyappstore.azurewebsites.net" +
        sessionStorage.getItem("appImg1"),
      appImg2:
        "http://cyappstore.azurewebsites.net" +
        sessionStorage.getItem("appImg2"),
      isLoading: true
    };
  },
  methods: {
    backTop() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.isLoading = false;
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