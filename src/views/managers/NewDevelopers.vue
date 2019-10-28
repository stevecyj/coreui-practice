<template>
  <div class="animated fadeIn">
    <nav class="navbar">
      <a class="navbar-brand">
        <h4>
          <b>開發人員資料</b>
        </h4>
      </a>
    </nav>

    <b-card no-body class="card-default">
      <b-card-body>
        <form>
          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">名字</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
                required
                v-model="name"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputUser" class="col-sm-2 col-form-label">身分證字號</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputUser"
                placeholder="請輸入身分證"
                pattern="^[A-Z][1,2]\d{8}$"
                required
                v-model="idNumber"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPhone" class="col-sm-2 col-form-label">電話</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPhone"
                placeholder="09xxxxxxxx"
                pattern="^09\d{8}$"
                required
                v-model="phone"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">E-mail</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="xxx@gmail.com"
                pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$"
                required
                v-model="email"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPsw" class="col-sm-2 col-form-label">密碼</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPsw"
                placeholder="至少8-12位英數的密碼限制"
                pattern="^[a-zA-Z0-9]{8,12}$"
                required
                v-model="password"
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
      name: "",
      phone: "",
      email: "",
      idNumber: "",
      password: ""
    };
  },
  methods: {
    submitButton() {
      var phoneR = /^09\d{8}$/;
      var emailR = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
      var idNumberR = /^[A-Z][1,2]\d{8}$/;
      var passwordR = /^[a-zA-Z0-9]{8,12}$/;

      if (
        this.name != "" &&
        phoneR.test(this.phone) &&
        emailR.test(this.email) &&
        idNumberR.test(this.idNumber) &&
        passwordR.test(this.password)
      ) {
        this.axios
          .post("https://cyappstore.azurewebsites.net/api/Admin/newDeveloper", {
            name: this.name,
            phone: this.phone,
            email: this.email,
            idNumber: this.idNumber,
            password: this.password
          })
          .then(res => {
            if (res.data.isSuccess === "True") {
              // console.log(res.data);
              alert("成功新增開發人員");
              this.name = "";
              this.phone = "";
              this.email = "";
              this.idNumber = "";
              this.password = "";
            }
          })
          .catch(error => {
            if (error.response.data.errors.idNumber != undefined) {
              alert("該身份證字號已被使用!");
            } else if (error.response.data.errors.phone != undefined) {
              alert("該手機號碼已被使用!");
            } else if (error.response.data.errors.email != undefined) {
              alert("該E-mail已被使用!");
            }
            // console.log(error);
          });
      }
    }
  }
};
</script>