<template>
  <div class="animated fadeIn" style="margin-top: 25px">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <div>
      <nav class="navbar">
        <a class="navbar-brand">
          <h4>
            <b>待審核APP</b>
          </h4>
        </a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="開發人員"
            aria-label="Search"
            v-model="keyword"
          />
          <!-- <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            v-on:click="searchbtn(keyword)"
          >搜尋</button>-->
        </form>
      </nav>
    </div>

    <b-card no-body class="card-default" style="text-align: left">
      <table class="table" style="table-layout:fixed;">
        <thead>
          <tr>
            <th scope="col" width="10%">No.</th>
            <th scope="col">APP名稱</th>
            <th scope="col" width="35%">簡介</th>
            <th scope="col">開發人員</th>
            <th scope="col" width="100px">上傳日期</th>
            <th scope="col" width="150px">是否同意</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event,index) in search(keyword)" v-bind:key="event.id">
            <td>{{index+1}}</td>
            <!-- <td>{{event.appName}}</td> -->
            <!-- <td @click="Detail(event.id)"> <router-link to="appdetail"> {{event.appName}} </router-link> </td> -->
            <td @click="Detail(event.id)">
              <router-link to>{{event.appName}}</router-link>
            </td>
            <td>{{event.summary}}</td>
            <td>{{event.name}}</td>
            <td>{{event.created_at}}</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm" @click="CheckOK(event.id)">是</button>&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="goBack(event.id)"
              >否</button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import Loading from "@/views/loading";
window.alert = function(msg) {
  var div = document.createElement("div");
  div.innerHTML =
    '<style type="text/css">' +
    ".nbaMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); } " +
    ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; } " +
    ".nbaDialog { position: fixed; z-index: 5000; width: 80%; max-width: 300px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }" +
    ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; } " +
    ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 17px; font-weight: 400; } " +
    ".nbaDialog .nbaDialogBd { padding: 0 .27rem; font-size: 15px; line-height: 48px; word-wrap: break-word; word-break: break-all; color: #000000; } " +
    ".nbaDialog .nbaDialogFt { position: relative; line-height: 48px; font-size: 15px; display: -webkit-box; display: -webkit-flex; display: flex; } " +
    '.nbaDialog .nbaDialogFt:after { content: " "; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); } ' +
    ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #09BB07; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; } " +
    '.nbaDialog .nbaDialogBtn:after { content: " "; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); } ' +
    ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }" +
    "</style>" +
    '<div id="dialogs2" style="display: none">' +
    '<div class="nbaMask"></div>' +
    '<div class="nbaDialog">' +
    ' <div class="nbaDialogHd">' +
    ' <strong class="nbaDialogTitle"></strong>' +
    " </div>" +
    ' <div class="nbaDialogBd" id="dialog_msg2">彈窗內容，告知當前狀態、信息和解决方法，描述文字盡量控制在三行内</div>' +
    ' <div class="nbaDialogHd">' +
    ' <strong class="nbaDialogTitle"></strong>' +
    " </div>" +
    ' <div class="nbaDialogFt">' +
    ' <a href="javascript:;" class="nbaDialogBtn nbaDialogBtnPrimary" id="dialog_ok2">確定</a>' +
    " </div></div></div>";
  document.body.appendChild(div);
  var dialogs2 = document.getElementById("dialogs2");
  dialogs2.style.display = "block";
  var dialog_msg2 = document.getElementById("dialog_msg2");
  dialog_msg2.innerHTML = msg;
  var dialog_ok2 = document.getElementById("dialog_ok2");
  dialog_ok2.onclick = function() {
    dialogs2.style.display = "none";
  };
};

import EventService from "@/service/EventService.js";

export default {
  components: {
    Loading
  },
  data() {
    return {
      keyword: "",
      events: [],
      isLoading: true
    };
  },
  created() {
    EventService.checkApps()
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
        // console.log(this.events);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    search(keyword) {
      var newList = [];
      this.events.forEach(event => {
        if (event.name.indexOf(keyword) != -1) {
          newList.push(event);
        }
      });
      return newList;
    },
    CheckOK(id) {
      // this.axios
      //   .put("https://cyappstore.azurewebsites.net/api/Admin/appCheckOk/" + id)
      EventService.appCheckOk(id)
        .then(res => {
          this.events = res.data;
          console.log(res);
        })
        .catch(error => {
          console.log(error.res);
        });
      alert("確認通過");
    },
    goBack(id) {
      // this.axios
      //   .put("https://cyappstore.azurewebsites.net/api/Admin/appGoBack/" + id)
      EventService.appGoBack(id)
        .then(res => {
          this.events = res.data;
        })
        .catch(error => {
          console.log(error.res);
        });
      alert("暫時退回");
    },

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

    // onClick: function (index, value) {
    //     //開啟新的視窗
    //     window.open(value.url,'_blank');
    // }, loadMore: function () {
    //     page++;
    //     loadPic();//載入更多
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
