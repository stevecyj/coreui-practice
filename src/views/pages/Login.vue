<template>
  <div class="app flex-row align-items-center">
    <div class="container" @submit.prevent="login">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>登入</h1>
                  <p class="text-muted">登入帳號</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      class="form-control"
                      placeholder="你的 email"
                      autocomplete="username email"
                      v-model="user.email"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="你的密碼"
                      autocomplete="current-password"
                      v-model="user.password"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" type="submit">登入</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <!-- <b-button variant="link" class="px-0">忘記密碼?</b-button> -->
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <!-- <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>註冊</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">馬上註冊!</b-button>
                </div>
              </b-card-body>
            </b-card>-->
          </b-card-group>
        </b-col>
      </b-row>
    </div>
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

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      isLogin: false,
      isMember: ""
    };
  },
  methods: {
    login() {
      var emailR = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
      var passwordR = /^[a-zA-Z0-9]{8,12}$/;

      if (this.user.email == "" || this.user.password == "") {
        alert("請輸入帳號密碼");
      } else if (
        emailR.test(this.user.email) &&
        passwordR.test(this.user.password)
      ) {
        // const api = "http://127.0.0.1:8000/api/login";
        const vm = this;
        this.axios
          .post(
            "https://cyappstore.azurewebsites.net/api/member/login",
            // "http://127.0.0.1:8000/api/member/login",
            this.user
          )
          .then(function(response) {
            if (response.data.isSuccess === "False") {
              console.log(response.data.isSuccess);
              alert("帳號密碼錯誤");
            } else {
              var userData = response.data;
              sessionStorage.setItem("userId", userData.id);
              sessionStorage.setItem("userName", userData.name);
              sessionStorage.setItem("userLevel", userData.level);
              sessionStorage.setItem("userIcon", userData.img);
              sessionStorage.setItem("isSuccess", userData.isSuccess);
              if (userData.level == 2 || userData.level == 3) {
                console.log(userData);
                vm.$router.push("/managers/welcome");
              } else if (userData.level == 1) {
                console.log(userData);
                alert("您不是開發人員");
              }
            }
          });
      } else {
        alert("帳號密碼錯誤");
      }
    }
  }
};
</script>
