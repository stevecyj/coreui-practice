<template>
  <div class="animated fadeIn">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <nav class="navbar">
      <a class="navbar-brand">
        <h4>
          <b>後台管理</b>
        </h4>
      </a>
    </nav>

    <b-card no-body class="card-default">
      <b-card-body>
        <h1>目前有 {{events.appCount}} 個 APP 尚未審核</h1>
      </b-card-body>
    </b-card>

    <b-card no-body class="card-default">
      <b-card-body>
        <h1>目前有 {{events.devCount}} 位 開發人員 尚未審核</h1>
      </b-card-body>
    </b-card>

    <nav class="navbar">
      <a class="navbar-brand">
        <h4>
          <b>下載前五名APP</b>
        </h4>
      </a>
    </nav>

    <b-card no-body class="card-default" style="text-align: center;">
      <!-- <b-card-body> -->
      <table class="table" style="table-layout: fixed;">
        <tr>
          <th scope="row" width="10%">No.</th>
          <td v-for="(event,index) in events.top5" v-bind:key="event.id">第 {{index+1}} 名</td>
        </tr>
        <tr>
          <th scope="row">APP名稱</th>
          <td v-for="(event) in events.top5" v-bind:key="event.id">{{event}}</td>
        </tr>
      </table>
      <!-- </b-card-body> -->
    </b-card>
  </div>
</template>

<script>
import Loading from "@/views/loading";
import EventService from "@/service/EventService.js";
export default {
  components: {
    Loading
  },
  data() {
    return {
      events: [],
      isLoading: true
    };
  },
  created() {
    EventService.homePage()
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
        // console.log(response);
        console.log(this.events);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
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