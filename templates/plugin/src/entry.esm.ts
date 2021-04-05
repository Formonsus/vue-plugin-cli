<% if (ts && version === 3) { -%>
import { App, DefineComponent, Plugin } from 'vue';
<% } else if (ts && version === 2) { -%>
import Vue from 'vue';
<% } -%>

<% if (ts) { -%>
  const install = (<% if (version === 3) { %>app: App, options: any<% } else { %>_Vue: typeof Vue, options: any<% } %>) => {
<% } else { -%>
  const install = (<% if (version === 3) { %>app, options<% } else { %>Vue, options<% } %>) => {
<% } -%>
    const topLevelPluginRoute = {
      path: options.routePrefix,
      component: "",
      children: ""
    }

    options.router.addRoute(topLevelPluginRoute);
  };


export default install;
