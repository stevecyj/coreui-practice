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
              <b-form-input id="appName" type="text" placeholder="請輸入 App 名稱"></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-1："
              label-align-sm="left"
              label-for="tags1"
            >
              <b-form-input id="tags1" type="text" placeholder="請輸入 tag 名稱，2~4字以內"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-2："
              label-align-sm="left"
              label-for="tags2"
            >
              <b-form-input id="tags2" type="text" placeholder="請輸入 tag 名稱，2~4字以內"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-3："
              label-align-sm="left"
              label-for="tags3"
            >
              <b-form-input id="tags3" type="text" placeholder="請輸入 tag 名稱，2~4字以內"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-4："
              label-align-sm="left"
              label-for="tags4"
            >
              <b-form-input id="tags4" type="text" placeholder="請輸入 tag 名稱，2~4字以內"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="輸入 tags-5："
              label-align-sm="left"
              label-for="tags5"
            >
              <b-form-input id="tags5" type="text" placeholder="請輸入 tag 名稱，2~4字以內"></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group label="簡介：" label-for="summary" :label-cols="3">
              <b-form-textarea id="summary" :rows="3" placeholder="請輸入簡介(50字以內)"></b-form-textarea>
            </b-form-group>
            <hr />
            <b-form-group label="新功能：" label-for="changelog" :label-cols="3">
              <b-form-textarea id="changelog" :rows="9" placeholder="請輸入新功能(200字以內)"></b-form-textarea>
            </b-form-group>
            <hr />
            <b-form-group label="詳細說明：" label-for="introduction" :label-cols="3">
              <b-form-textarea id="introduction" :rows="9" placeholder="請輸入詳細說明(200字以內)"></b-form-textarea>
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
              <b-button type="submit" size="sm" variant="primary">
                <i class="fa fa-dot-circle-o"></i> Submit
              </b-button>
              <b-button type="reset" size="sm" variant="danger">
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
      selected: [], // Must be an array reference!
      show: true
    };
  },
  methods: {
    click() {
      // do nothing
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
