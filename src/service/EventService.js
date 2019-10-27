import axios from "axios";

const apiClient = axios.create({
  // baseURL: `http://cyappstore.azurewebsites.net`,
  baseURL: `https://cyappstore.azurewebsites.net`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  homePage() {
    //首頁用來計算數量的api
    return apiClient.get("/api/Admin/countAll");
  },

  checkDev() {
    //載入未審核之開發者申請
    return apiClient.get("/api/Admin/devCheck");
  },

  checkApps() {
    //載入未審核之app
    return apiClient.get("/api/Admin/appCheck");
  },

  appManage() {
    //App管理
    return apiClient.get("/api/Admin/appManage");
  },
  //會員管理
  memberManage() {
    return apiClient.get("/api/Admin/memberManage");
  },

  //類別管理
  classManage() {
    // return apiClient.get('/api/Admin/countCategory')
    return apiClient.get("/api/Admin/countCategory");
  },

  //審核APP
  appCheckOk(id) {
    return apiClient.put("/api/Admin/appCheckOk/" + id);
  },
  appGoBack(id) {
    return apiClient.put("/api/Admin/appGoBack/" + id);
  },
  App(id) {
    return apiClient.get("/api/member/App/" + id);
  },
  appImg(id) {
    return apiClient.get("/api/member/Appimg/" + id);
  },

  //管理APP
  stopApp(id) {
    return apiClient.put("/api/Admin/stopApp/" + id);
  },
  restoreApp(id) {
    return apiClient.put("/api/Admin/restoreApp/" + id);
  },

  //審核開發人員
  devCheckOk(id) {
    return apiClient.put("/api/Admin/devCheckOk/" + id);
  },
  devGoBack(id) {
    return apiClient.put("/api/Admin/devGoBack/" + id);
  },

  //管理會員
  stopMember(id) {
    return apiClient.put("/api/Admin/stopMember/" + id);
  },
  restoreMember(id) {
    return apiClient.put("/api/Admin/restoreMember/" + id);
  }

  //新增開發者
  // developersNew(){
  // return apiClient.get('/api/Admin/newDeveloper')
  // }

  // getEvent(id) {
  // return apiClient.get('/member/' + id)
  // },

  // getApp(id) {
  //     return apiClient.get('/appuser/' + id)
  // },

  // getSearchs() {
  // return apiClient.get('/products')
  // },

  // getSearch(id) {
  // return apiClient.get('/products' + id)
  // },
};
