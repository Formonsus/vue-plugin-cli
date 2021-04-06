import { createApp } from "vue";
// Import your plugin from src folder
import plugin from "../src/entry.esm";
<% if (vuex) { -%>
import store from "./state/store";
<% } -%>
<% if (vueRouter) { -%>
import router from "./router/index";
<% } -%>
import Dev from "./serve.vue";

const app = createApp(Dev);
// Install your plugin from src folder.
// This is the exact same way you would add this plugin to any other Vue application, after you publish it to for
// example npm.
app.use(plugin, {
  router: router,
  store: store,
  routePrefix: "/plugin"
});

<% if (vuex) { -%>
app.use(store);
<% } -%>

<% if (vueRouter) { -%>
app.use(router);
<% } -%>

app.mount("#app");
