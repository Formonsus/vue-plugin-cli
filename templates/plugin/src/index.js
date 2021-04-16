import counter from "./store/counter";
import routes from "./router/routes";
import PluginLayout from "./router/layouts/PluginLayout.vue";

const install = (app, options) => {
  const topLevelPluginRoute = {
    path: options.routePrefix,
    component: PluginLayout,
    children: routes
  };

  options.router.addRoute(topLevelPluginRoute);
  options.store.registerModule("counterModule", counter);
};

export default install;
