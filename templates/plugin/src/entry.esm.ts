<% if (ts && version === 3) { -%>
import { App, DefineComponent, Plugin } from 'vue';
<% } else if (ts && version === 2) { -%>
import _Vue, { PluginObject, VueConstructor } from 'vue';
<% } -%>

<% if (ts) { -%>
  const install = (<% if (version === 3) { %>app: App, options: any<% } else { %>Vue: typeof _Vue, options: any<% } %>) => {
<% } else { -%>
  const install = (<% if (version === 3) { %>app, options: any<% } else { %>Vue, options: any<% } %>) => {
<% } -%>
    const topLevelPluginRoute = {
      path: options.routePrefix,
      component: "",
      children: ""
    }

    options.router.addRoute(topLevelPluginRoute);
  };


export default install;
