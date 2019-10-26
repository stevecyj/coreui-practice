import axios from "axios";

const apiClient = axios.create({
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
