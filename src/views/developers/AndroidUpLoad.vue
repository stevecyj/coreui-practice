<template>
  <div class="animated fadeIn" style="margin-top: 25px">
    <b-row>
      <b-col md="12" lg="8" offset-lg="2">
        <b-card>
          <div slot="header">
            <strong>Android</strong> 上傳
          </div>
          <b-form>
            <b-form-group description label="輸入 App 名稱：" label-for="appName" label-cols-lg="3">
              <b-form-input
                id="appName"
                type="text"
                placeholder="請輸入 App 名稱"
                pattern=".{1,50}"
                required
                v-model.lazy="appName"
              ></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-1："
              label-align-sm="left"
              label-for="tags1"
            >
              <b-form-input
                id="tags1"
                type="text"
                placeholder="請輸入 tag 名稱，2~4字以內"
                pattern="\D{2,4}"
                required
                v-model.lazy="tags[0]"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-2："
              label-align-sm="left"
              label-for="tags2"
            >
              <b-form-input
                id="tags2"
                type="text"
                placeholder="請輸入 tag 名稱，2~4字以內"
                pattern="\D{2,4}"
                v-model.lazy="tags[1]"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-3："
              label-align-sm="left"
              label-for="tags3"
            >
              <b-form-input
                id="tags3"
                type="text"
                placeholder="請輸入 tag 名稱，2~4字以內"
                pattern="\D{2,4}"
                v-model.lazy="tags[2]"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-4："
              label-align-sm="left"
              label-for="tags4"
            >
              <b-form-input
                id="tags4"
                type="text"
                placeholder="請輸入 tag 名稱，2~4字以內"
                pattern="\D{2,4}"
                v-model.lazy="tags[3]"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-5："
              label-align-sm="left"
              label-for="tags5"
            >
              <b-form-input
                id="tags5"
                type="text"
                placeholder="請輸入 tag 名稱，2~4字以內"
                pattern="\D{2,4}"
                v-model.lazy="tags[4]"
              ></b-form-input>
            </b-form-group>
            <hr />

            <b-form-group label="分類：" label-for="category" :label-cols="3">
              <b-form-select id="category" :rows="3" v-model="selected" :options="options"></b-form-select>
            </b-form-group>

            <hr />
            <b-form-group label="簡介：" label-for="summary" :label-cols="3">
              <b-form-textarea
                id="summary"
                :rows="3"
                placeholder="請輸入簡介(50字以內)"
                pattern=".{1,50}"
                required
                v-model.lazy="summary"
              ></b-form-textarea>
            </b-form-group>
            <hr />
            <b-form-group label="版本號：" label-for="changeNum" :label-cols="3">
              <b-form-input
                id="changeNum"
                placeholder="X.X.X"
                pattern="^[0-1]\.[0-9]*\.[0-9]$"
                required
                v-model.lazy="version"
              ></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group label="詳細說明：" label-for="introduction" :label-cols="3">
              <b-form-textarea
                id="introduction"
                :rows="9"
                placeholder="請輸入詳細說明(200字以內)"
                pattern=".{1,200}"
                required
                v-model.lazy="introduction"
              ></b-form-textarea>
            </b-form-group>

            <hr />
            <b-form-group label="上傳 App" label-for="fileInputApp" :label-cols="3">
              <!-- <b-form-file id="file" v-model="file" plain ref="file"  accept=".apk"></b-form-file> -->
              <input type="file" id="file" ref="file" />
            </b-form-group>
            <hr />

            <b-form-group label="上傳 ICON" label-for="fileInputIcon" :label-cols="3">
              <!-- <b-form-file id="fileInputIcon" plain v-model="icon" accept=".jpg, .png, .gif, .jpeg"></!-->
              <input type="file" id="icon" ref="icon" />
            </b-form-group>
            <hr />
            <b-form-group label="上傳 截圖1" label-for="screenShot1" :label-cols="3">
              <!-- <b-form-file id="screenShot1" plain v-model="img1" accept=".jpg, .png, .gif, .jpeg"></b-form-file> -->
              <input type="file" id="img1" ref="img1" />
            </b-form-group>

            <b-form-group label="上傳 截圖2" label-for="screenShot2" :label-cols="3">
              <!-- <b-form-file id="screenShot2" plain v-model="img2" accept=".jpg, .png, .gif, .jpeg"></b-form-file> -->
              <input type="file" id="img2" ref="img2" />
            </b-form-group>
            <hr />
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary" v-on:click="click">
                <i class="fa fa-dot-circle-o"></i> Submit
              </b-button>
              <!-- <b-button type="reset" size="sm" variant="danger" v-on:click="clear">
                <i class="fa fa-ban"></i> Reset
              </b-button>-->
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const Swal = require("sweetalert2");
export default {
  name: "forms",
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      options: [],
      selected: null,
      show: true,
      appName: "",
      summary: "",
      introduction: "",
      version: "",
      tags: []
    };
  },
  mounted() {
    const me = this;
    // 初始化页面数据
    // me.loadPageData();
    this.isLoading = true;
    this.axios
      .get("https://cyappstore.azurewebsites.net/api/develop/categories")
      .then(response => {
        this.options = response.data;
        for (let i = 0; i < response.data.length; i++) {
          this.options[i].text = response.data[i].category;
          this.options[i].value = response.data[i].id;
        }
        this.isLoading = false;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    click() {
      var appNameR = /.{1,50}/;
      var summaryR = /.{1,50}/;
      var introductionR = /.{1,200}/;
      var tagsR = /\D{2,4}/;
      var versionR = /^[0-1]\.[0-9]*\.[0-9]$/;

      if (
        appNameR.test(this.appName) &&
        summaryR.test(this.summary) &&
        introductionR.test(this.introduction) &&
        tagsR.test(this.tags) &&
        versionR.test(this.version) &&
        this.selected != null
      ) {
        // console.log(this.tags[0]);
        let formData = new FormData();
        this.file = this.$refs.file.files[0];
        this.icon = this.$refs.icon.files[0];
        this.img1 = this.$refs.img1.files[0];
        this.img2 = this.$refs.img2.files[0];
        // console.log(this.selected);
        formData.append("memberId", this.userId);
        formData.append("categoryId", this.selected);
        formData.append("appName", this.appName);
        formData.append("summary", this.summary);
        formData.append("introduction", this.introduction);
        formData.append("version", this.version);
        formData.append("tags", this.tags);
        formData.append("file", this.file);
        formData.append("icon", this.icon);
        formData.append("img1", this.img1);
        formData.append("img2", this.img2);
        const config = {
          header: { "Content-Type": "multipart/form-data" }
        };
        this.axios
          .post(
            "https://cyappstore.azurewebsites.net/api/develop/Android",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" }
            }
          )
          .then(res => {
            if (res.data.isSuccess === "True") {
              Swal.fire({
                type: "success",
                title: "上傳成功",
                showConfirmButton: false,
                timer: 3000
              });
              // console.log(res.data);
              // this.options = [0],
              (this.selected = null),
                (this.show = true),
                (this.appName = ""),
                (this.summary = ""),
                (this.introduction = ""),
                (this.version = ""),
                (this.tags = []),
                (this.$refs.file.value = ""),
                (this.$refs.icon.value = ""),
                (this.$refs.img1.value = ""),
                (this.$refs.img2.value = "");
            } else if (res.data.isSuccess === "False") {
              Swal.fire({
                type: "error",
                title: res.data.reason,
                showConfirmButton: false,
                timer: 3000
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    loadPageData: function() {
      this.axios
        .get("https://cyappstore.azurewebsites.net/api/develop/categories")
        .then((this.isLoading = false));
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
