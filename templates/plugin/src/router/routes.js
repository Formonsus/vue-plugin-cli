export default [
  {
    path: "counter",
    name: "counter",
    component: () => import(/* webpackChunkName: "counter" */"./views/plugin.vue")
  }
]
