<% if (vuex) { -%>
import store from "./state/store";
<% } -%>
<% if (vueRouter) { -%>
import router from "./router/index";
<% } -%>
import Dev from "./serve.vue";

<% if (version === 3) { -%>
import { createApp } from "vue";

const app = createApp(Dev);

<% if (vueRouter) { -%>
app.use(router);
<% } -%>
<% if (vuex) { -%>
app.use(store);
<% } -%>

app.mount("#app");
<% } else {
if (ts) { -%>
import Vue, { VNode } from "vue";
<% } else { -%>
import Vue from "vue";
<% } -%>

Vue.config.productionTip = false;

new Vue({
<% if (vueRouter) { -%>
  router,
<% } -%>
<% if (vuex) { -%>
  store,
<% } -%>
<% if (ts) { -%>
  render: (h): VNode => h(Dev),
<% } else { -%>
  render: (h) => h(Dev),
<% } -%>
}).$mount("#app");
<% } -%>
