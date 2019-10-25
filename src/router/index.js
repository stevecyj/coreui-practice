import Vue from "vue";
import Router from "vue-router";

// Containers
const DefaultContainer = () => import("@/containers/DefaultContainer");

// Views
// const Dashboard = () => import("@/views/Dashboard");

// const Colors = () => import("@/views/theme/Colors");
// const Typography = () => import("@/views/theme/Typography");

// const Charts = () => import("@/views/Charts");
// const Widgets = () => import("@/views/Widgets");

// Views - Components
// const Cards = () => import("@/views/base/Cards");
// const Switches = () => import("@/views/base/Switches");
// const Tabs = () => import("@/views/base/Tabs");
// const Breadcrumbs = () => import("@/views/base/Breadcrumbs");
// const Carousels = () => import("@/views/base/Carousels");
// const Collapses = () => import("@/views/base/Collapses");
// const Jumbotrons = () => import("@/views/base/Jumbotrons");
// const ListGroups = () => import("@/views/base/ListGroups");
// const Navs = () => import("@/views/base/Navs");
// const Navbars = () => import("@/views/base/Navbars");
// const Paginations = () => import("@/views/base/Paginations");
// const Popovers = () => import("@/views/base/Popovers");
// const ProgressBars = () => import("@/views/base/ProgressBars");
// const Tooltips = () => import("@/views/base/Tooltips");

// Views - Buttons
// const StandardButtons = () => import("@/views/buttons/StandardButtons");
// const ButtonGroups = () => import("@/views/buttons/ButtonGroups");
// const Dropdowns = () => import("@/views/buttons/Dropdowns");
// const BrandButtons = () => import("@/views/buttons/BrandButtons");

// Views - Editors
// const TextEditors = () => import("@/views/editors/TextEditors");
// const CodeEditors = () => import("@/views/editors/CodeEditors");

// Views - Forms
// const BasicForms = () => import("@/views/forms/BasicForms");
// const AdvancedForms = () => import("@/views/forms/AdvancedForms");
// const ValidationForms = () => import("@/views/forms/ValidationForms");

// Views GoogleMaps
// const GoogleMaps = () => import("@/views/GoogleMaps");

// Views - Icons
// const Flags = () => import("@/views/icons/Flags");
// const FontAwesome = () => import("@/views/icons/FontAwesome");
// const SimpleLineIcons = () => import("@/views/icons/SimpleLineIcons");
// const CoreUIIcons = () => import("@/views/icons/CoreUIIcons");

// Views - Notifications
// const Alerts = () => import("@/views/notifications/Alerts");
// const Badges = () => import("@/views/notifications/Badges");
// const Modals = () => import("@/views/notifications/Modals");
// const Toastr = () => import("@/views/notifications/Toastr");

// Views - Tables
// const Tables = () => import("@/views/tables/Tables");
// const DataTable = () => import("@/views/tables/DataTable");

// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/pages/Login");
const Register = () => import("@/views/pages/Register");

// Users
// const Users = () => import("@/views/users/Users");
// const User = () => import("@/views/users/User");

// Plugins
// const Draggable = () => import("@/views/plugins/Draggable");
// const Calendar = () => import("@/views/plugins/Calendar");
// const Spinners = () => import("@/views/plugins/Spinners");

// Views - UI Kits
// const Invoice = () => import("@/views/apps/invoicing/Invoice");
// const Compose = () => import("@/views/apps/email/Compose");
// const Inbox = () => import("@/views/apps/email/Inbox");
// const Message = () => import("@/views/apps/email/Message");

//developers Customized
const ModProfile = () => import("@/views/developers/ModProfile");
const MyApps = () => import("@/views/developers/MyApps");
const AndroidUpLoad = () => import("@/views/developers/AndroidUpLoad");
const iOSUpLoad = () => import("@/views/developers/iOSUpload");

//managers Customized
const ReviewApps = () => import("@/views/managers/ReviewApps");
const ReviewDevelopers = () => import("@/views/managers/ReviewDevelopers");
const ManageApps = () => import("@/views/managers/ManageApps");
const ManageMembers = () => import("@/views/managers/ManageMembers");
const Welcome = () => import("@/views/managers/Welcome");
const ManageHome = () => import("@/views/managers/ManageHome");
const ManageAlter = () => import("@/views/managers/ManageAlter");
const NewDevelopers = () => import("@/views/managers/NewDevelopers");
const ManageClass = () => import("@/views/managers/ManageClass");

const AppDetail = () => import("@/views/managers/AppDetail");

Vue.use(Router);

const router = new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/pages/login",
      // redirect: "/managers/managehome",
      meta: { label: "後台管理" },
      name: "Developers",
      component: DefaultContainer,
      children: [
        {
          path: "/managers/welcome",
          meta: { label: "歡迎回來", requiresAuth: true },
          name: "Welcome",
          component: Welcome
        },

        {
          path: "/managers/managehome",
          meta: { label: "管理首頁", requiresAuth: true },
          name: "ManageHome",
          component: ManageHome
        },
        {
          path: "/managers/reviewapps",
          meta: { label: "審核 Apps", requiresAuth: true },
          name: "ReviewApps",
          component: ReviewApps
        },
        {
          path: "/managers/reviewdevelopers",
          meta: { label: "審核開發人員", requiresAuth: true },
          name: "ReviewDevelopers",
          component: ReviewDevelopers
        },
        {
          path: "/managers/manageapps",
          meta: { label: "管理 Apps", requiresAuth: true },
          name: "ManageApps",
          component: ManageApps
        },
        {
          path: "/managers/managemembers",
          meta: { label: "管理會員", requiresAuth: true },
          name: "ManageMembers",
          component: ManageMembers
        },
        {
          path: "/managers/manageclass",
          meta: { label: "管理類別", requiresAuth: true },
          name: "ManageClass",
          component: ManageClass
        },
        {
          path: "/managers/newdevelopers",
          meta: { label: "新增開發人員", requiresAuth: true },
          name: "NewDevelopers",
          component: NewDevelopers
        },
        {
          path: "/managers/managealter",
          meta: { label: "個人資料修改", requiresAuth: true },
          name: "ManageAlter",
          component: ManageAlter
        },

        {
          path: "/managers/appdetail",
          meta: { label: "詳細頁面測試" },
          name: "AppDetail",
          component: AppDetail
        },

        {
          path: "/developers/myapps",
          meta: { label: "我的 Apps", requiresAuth: true },
          name: "MyApps",
          component: MyApps
        },
        {
          path: "/developers/androidupload",
          meta: { label: "Android 上傳", requiresAuth: true },
          name: "AndroidUpLoad",
          component: AndroidUpLoad
        },
        {
          path: "/developers/iosupload",
          meta: { label: "iOS 上傳", requiresAuth: true },
          name: "iOSUpLoad",
          component: iOSUpLoad
        },
        {
          path: "/developers/modprofile",
          meta: { label: "個人資料修改", requiresAuth: true },
          name: "modprofile",
          component: ModProfile
        }
      ]
    },
    {
      path: "/pages",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },
        {
          path: "500",
          name: "Page500",
          component: Page500
        },
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log("to", to, "from", from, "next", next);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem("userName")) {
      next({});
    } else {
      next({ path: "/pages/login" });
    }
  } else {
    next();
  }
});

export default router;
