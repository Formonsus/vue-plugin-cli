import counter from "./state/counter";
import routes from "./router/routes";
import home from "./router/views/home.vue";

<% if (ts && version === 3) { -%>
import { App } from 'vue';
<% } else if (ts && version === 2) { -%>
import Vue from 'vue';
<% } -%>

<% if (ts) { -%>
  const install = (<% if (version === 3) { %>_app: App, options: any<% } else { %>_Vue: typeof Vue, options: any<% } %>) => {
<% } else { -%>
  const install = (<% if (version === 3) { %>app, options<% } else { %>Vue, options<% } %>) => {
<% } -%>
    const topLevelPluginRoute = {
      path: options.routePrefix,
      component: home,
      children: routes
    }

    options.router.addRoute(topLevelPluginRoute);
    options.store.registerModule("counter", counter);
  };


export default install;
