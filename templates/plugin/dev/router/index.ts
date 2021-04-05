import routes from "./routes";

<% if (version === 3) { -%>
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
<% } else { -%>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
<% } -%>

export default router;
