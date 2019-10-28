<template>
  <div class="animated fadeIn">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <div>
      <nav class="navbar">
        <a class="navbar-brand">
          <h4>
            <b>會員管理</b>
          </h4>
        </a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="會員名稱"
            aria-label="Search"
            v-model="keyword"
          />
          <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜尋</button> -->
        </form>
      </nav>
    </div>

    <b-card no-body class="card-default" style="text-align: center">
      <table class="table" style="table-layout:fixed;">
        <thead>
          <tr>
            <th scope="col" width="10%">No.</th>
            <th scope="col">會員名稱</th>
            <th scope="col">電話</th>
            <th scope="col">E-mail</th>
            <th scope="col">開發人員</th>
            <th scope="col">停權</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event,index) in search(keyword)" v-bind:key="event.id">
            <td>{{index+1}}</td>
            <td>{{event.name}}</td>
            <td>{{event.phone}}</td>
            <td>{{event.email}}</td>
            <td v-if="event.level===1">否</td>
            <td v-if="event.level===2">是</td>
            <!-- <td>{{event.level}}</td> -->
            <td>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                v-if="event.permission===1"
                @click="stopMember(event.id)"
              >停權</button>
              <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                v-if="event.permission===0"
                @click="restoreMember(event.id)"
              >恢復</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- </b-card-body> -->
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
    EventService.memberManage()
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
        // console.log("data---", response.data);
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
    stopMember(id) {
      // this.axios
      //   .put("http://127.0.0.1:8000/api/Admin/stopMember/" + id)
      EventService.stopMember(id)
        .then(res => {
          this.events = res.data;
          alert("停權會員成功");
        })
        .catch(error => {
          console.log(error.res);
        });
      alert("停權會員成功");
    },
    restoreMember(id) {
      // this.axios
      //   .put("http://127.0.0.1:8000/api/Admin/restoreMember/" + id)
      EventService.restoreMember(id)
        .then(res => {
          this.events = res.data;
          alert("恢復會員成功");
        })
        .catch(error => {
          console.log(error.res);
        });
      alert("恢復會員成功");
    }
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