import counter from "./state/counter";
import routes from "./router/routes";
import home from "./router/views/home.vue";

const install = (app, options) => {

  const topLevelPluginRoute = {
    path: options.routePrefix,
    component: home,
    children: routes
  }

  options.router.addRoute(topLevelPluginRoute);
  options.store.registerModule("counterModule", counter);
};

export default install;
