<template>
  <div class="animated fadeIn">
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
                pattern="\s\W{2,4}"
                v-model.lazy="input.tag1"
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
                pattern="\s\W{2,4}"
                v-model.lazy="input.tag2"
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
                pattern="\s\W{2,4}"
                v-model.lazy="input.tag3"
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
                pattern="\s\W{2,4}"
                v-model.lazy="input.tag4"
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
                pattern="\s\W{2,4}"
                v-model.lazy="input.tag5"
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

            <b-form-group label="上傳 ICON" label-for="fileInputIcon" :label-cols="3">
              <b-form-file id="fileInputIcon" :plain="true"></b-form-file>
            </b-form-group>
            <hr />
            <b-form-group label="上傳 截圖1" label-for="screenShot1" :label-cols="3">
              <b-form-file id="screenShot1" :plain="true"></b-form-file>
            </b-form-group>

            <b-form-group label="上傳 截圖2" label-for="screenShot2" :label-cols="3">
              <b-form-file id="screenShot2" :plain="true"></b-form-file>
            </b-form-group>
            <hr />
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary" @click="click">
                <i class="fa fa-dot-circle-o"></i> Submit
              </b-button>
              <b-button type="reset" size="sm" variant="danger" @click="clear">
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
      options: [
        { value: null, text: "請選擇分類" },
        { value: "game", text: "遊戲" },
        { value: "music", text: "音樂" },
        { value: "food", text: "美食" },
        { value: "photo", text: "照片" },
        { value: "tool", text: "工具" }
      ],
      selected: null,
      show: true,
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
  },
  created() {
    this.axios
      .get("http://127.0.0.1:8000/api/develop/categories")
      .then(response => {
        this.events = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    click() {
      // do nothing
    },
    clear() {
      this.input = {
        appName: "",
        summary: "",
        introduction: "",
        version: "",
        tags: []
      };
    },
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      this.axios
        .get("http://127.0.0.1:8000/api/develop/categories")
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
