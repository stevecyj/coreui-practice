<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12" lg="8" offset-lg="2">
        <b-card>
          <div slot="header">
            <strong>Android</strong> 上傳
          </div>
          <b-form >
            <b-form-group description label="輸入 App 名稱：" label-for="appName" label-cols-lg="3">
              <b-form-input
                id="appName"
                type="text"
                placeholder="請輸入 App 名稱"
                pattern=".{1,50}"
                required
                v-model.lazy="input.appName"
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
                v-model.lazy="input.tags[0]"
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
                v-model.lazy="input.tags[1]"
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
                v-model.lazy="input.tags[2]"
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
                v-model.lazy="input.tags[3]"
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
                v-model.lazy="input.tags[4]"
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
                v-model.lazy="input.summary"
              ></b-form-textarea>
            </b-form-group>
            <hr />
            <b-form-group label="版本號：" label-for="changeNum" :label-cols="3">
              <b-form-input
                id="changeNum"
                placeholder="X.X.X"
                pattern="^[0-1]\.[0-9]*\.[0-9]$"
                required
                v-model.lazy="input.version"
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
                v-model.lazy="input.introduction"
              ></b-form-textarea>
            </b-form-group>

            <hr />
            <b-form-group label="上傳 App" label-for="fileInputApp" :label-cols="3">
              <!-- <b-form-file id="file" v-model="file" plain ref="file"  accept=".apk"></b-form-file> -->
              <input type="file" id="file" ref="file" />
            </b-form-group>
            <hr />

            <b-form-group label="上傳 ICON" label-for="fileInputIcon" :label-cols="3">
              <b-form-file id="fileInputIcon" plain v-model="icon" accept=".jpg, .png, .gif, .jpeg"></b-form-file>
            </b-form-group>
            <hr />
            <b-form-group label="上傳 截圖1" label-for="screenShot1" :label-cols="3">
              <b-form-file id="screenShot1" plain v-model="img1" accept=".jpg, .png, .gif, .jpeg"></b-form-file>
            </b-form-group>

            <b-form-group label="上傳 截圖2" label-for="screenShot2" :label-cols="3">
              <b-form-file id="screenShot2" plain v-model="img2" accept=".jpg, .png, .gif, .jpeg"></b-form-file>
            </b-form-group>
            <hr />
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary" v-on:click="click">
                <i class="fa fa-dot-circle-o"></i> Submit
              </b-button>
              <b-button type="reset" size="sm" variant="danger" v-on:click="clear">
                <i class="fa fa-ban"></i> Reset
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {
      options: [],
      selected: null,
      show: true,
      file: null,
      icon: null,
      img1: null,
      img2: null,
      input: {
        appName: "",
        summary: "",
        introduction: "",
        version: "",
        tags: []
      }
    };
  },
  mounted() {
    const me = this;
    // 初始化页面数据
    // me.loadPageData();
    this.isLoading = true;

    this.axios
      .get("http://127.0.0.1:8000/api/develop/categories")
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
  // created() {
  // const _this = this;
  // this.axios
  //   .get("http://127.0.0.1 :8000/api/develop/categories")
  //   .then(response => {
  //     this.options = response.data;
  //     console.log(this.options[0]);
  //     // this.options.value = response.data[0].id;
  //     // this.options.text = response.data[0].category;
  //     // console.log(this.options.text);
  //     // console.log(this.options.value);
  //     this.isLoading = false;
  //   })
  //   .catch(error => {
  //     console.log("There was an error:", error.response);
  //   });
  // },
  methods: {
    click() {
      let formData = new FormData();
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      formData.append("input", this.input);
      formData.append("file", this.file);
      // formData.append("icon", this.icon);
      // formData.append("img1", this.img1);
      // formData.append("img2", this.img2);
      const config = {
        header: { "Content-Type": "multipart/form-data" }
      };
      this.axios
        .post("http://127.0.0.1:8000/api/develop/Android", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    clear() {
      (this.selected = ""),
        (this.input = {
          appName: "",
          summary: "",
          introduction: "",
          version: "",
          tags: []
        });
    },
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      this.axios
        .get("http://127.0.0.1:8000/api/develop/categories")
        .then((this.isLoading = false));
    }
    // fileChange:function(e){
    //   this.file = e.target.files[0];
    // }
    // iconUp(e) {
    //   this.icon = e.target.file;
    //   console.log(this.icon);
    // }
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
