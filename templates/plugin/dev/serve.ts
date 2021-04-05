import store from "./state/store";
<% if (version === 3) { -%>
import { createApp } from "vue";

<% if (vueRouter) { -%>
import router from "./router/index";
<% } -%>
import Dev from "./serve.vue";

const app = createApp(Dev);

<% if (vueRouter) { -%>
app.use(router);
<% } -%>

app.use(store);

app.mount("#app");
<% } else {
if (ts) { -%>
import Vue, { VNode } from "vue";
<% } else { -%>
import Vue from "vue";
<% } -%>
import Dev from "./serve.vue";

Vue.config.productionTip = false;

new Vue({
<% if (ts) { -%>
  render: (h): VNode => h(Dev),
<% } else { -%>
  render: (h) => h(Dev),
<% } -%>
}).$mount("#app");
<% } -%>
