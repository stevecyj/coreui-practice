<template>
  <div class="animated fadeIn">
    <nav class="navbar">
      <a class="navbar-brand">
        <h4>
          <b>個人資料修改</b>
        </h4>
      </a>
    </nav>

    <b-card no-body class="card-default">
      <b-card-body>
        <form>
          <!-- <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">我的頭像</label>
            <div class="col-sm-10 input-group">
              <input type="text" class="form-control" placeholder="請選擇圖片" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">上傳圖片</button>
              </div>
            </div>
          </div>-->

          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">姓名</label>
            <div class="col-sm-10">
              <span>{{userName}}</span>
              <!-- <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
                v-model.lazy="input.name"
              />-->
            </div>
          </div>

          <!-- <div class="form-group row">
            <label
              for="inputPhone"
              class="col-sm-2 col-form-label"
              pattern="^09\d{8}$"
            >我的電話</label>
            <div class="col-sm-10">
              <input type="phone" class="form-control" id="inputPhone" placeholder="09xx-xxx-xxx" />
            </div>
          </div>-->

          <div class="form-group row">
            <label for="inputOldPsw" class="col-sm-2 col-form-label">請輸入密碼</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputOldPsw"
                placeholder="請輸入密碼"
                pattern="[a-zA-Z0-9]{8,12}"
                required
                v-model="oldPwd"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputNewPsw1" class="col-sm-2 col-form-label">請輸入新的密碼</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputNewPsw1"
                placeholder="請輸入8-12位數含英文及數字之新密碼"
                pattern="[a-zA-Z0-9]{8,12}"
                required
                v-model="newPwd"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputNewPsw2" class="col-sm-2 col-form-label">請再次確認密碼</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputNewPsw2"
                placeholder="請再次確認密碼"
                pattern="[a-zA-Z0-9]{8,12}"
                required
                v-model="pwdCheck"
              />
            </div>
          </div>
          <div style="text-align: center">
            <button type="submit" class="btn btn-primary" @click="submitButton">確認送出</button>
          </div>
        </form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
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
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      userName: sessionStorage.getItem("userName"),
      oldPwd: "",
      newPwd: "",
      pwdCheck: ""
    };
  },
  methods: {
    submitButton() {
      var passwordR = /^[a-zA-Z0-9]{8,12}$/;
      // let { oldPwdm, newPwd, pwdCheck } = this.input;
      if (
        passwordR.test(this.oldPwd) &&
        passwordR.test(this.newPwd) &&
        passwordR.test(this.pwdCheck)
      ) {
        this.axios
          .put(
            "https://cyappstore.azurewebsites.net/api/Admin/pwdChange/" +
              this.userId,
            {
              oldPwd: this.oldPwd,
              newPwd: this.newPwd,
              pwdCheck: this.pwdCheck
            }
          )
          .then(res => {
            // console.log(res.data);
            if (res.data.isSuccess === "True") {
              alert("修改成功");
              this.oldPwd = "";
              this.newPwd = "";
              this.pwdCheck = "";
            } else if (res.data.isSuccess === "False") {
              alert("密碼錯誤");
            }
          })
          .catch(error => {
            console.log(error);
            alert("確認密碼錯誤");
          });
      }
    }
  }
};
</script>