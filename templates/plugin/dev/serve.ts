import plugin from "../src/entry.esm";

<% if (vuex) { -%>
import store from "./state/store";
<% } -%>
<% if (vueRouter) { -%>
import router from "./router/index";
<% } -%>
import Dev from "./serve.vue";


import { createApp } from "vue";

const app = createApp(Dev);

<% if (vuex) { -%>
app.use(store);
<% } -%>

app.use(plugin, {
  router: router,
  store: store,
  routePrefix: "/plugin"
});

<% if (vueRouter) { -%>
app.use(router);
<% } -%>

app.mount("#app");

