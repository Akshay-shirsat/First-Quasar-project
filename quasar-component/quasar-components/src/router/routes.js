const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/AjaxBar", component: () => import("pages/AjaxBar.vue") },
      { path: "/Avatar", component: () => import("pages/AvatarComp.vue") },
      { path: "/FormQuasar", component: () => import("pages/FormQuasar.vue") },
      {path: "/QuasarImg",component: ()=> import ("pages/QuasarImg.vue")},
      {path: "/InfiniteScroling",component: ()=> import ("pages/InfiniteScroling.vue")},
      {path: "/ListListitems",component: ()=> import ("pages/ListListitems.vue")},
      {path:"/TablesQuasar", component:()=>import ("pages/TablesQuasar.vue")},
      {path:"/ClosePopup", component:()=>import ("pages/ClosePopup.vue")},
      {path:"/InterSection", component:()=>import ("pages/InterSection.vue")},
      {path:"/MutationsQuasar", component:()=>import ("pages/MutationsQuasar.vue")},
      {path:"/BottomSheet", component:()=>import ("pages/BottomSheet.vue")},
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
