export default [
  {
    path: "welcome",
    name: "welcome",
    component: () => import(/* webpackChunkName: "welcome" */"./views/Welcome.vue")
  }
]
