import routes from "./routes";

<% if (version === 3) { -%>
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
<% } else { -%>
import VueRouter from "vue-router";

const router = new VueRouter({
  routes
});
<% } -%>

export default router;
