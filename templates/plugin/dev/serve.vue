<script<% if (ts) { %> lang="ts"<% } %>>
<% if (version === 3) { -%>
import { defineComponent } from "vue";
<% } else { -%>
import Vue from "vue";
<% } -%>

export default <% if (version === 3) {%>defineComponent<% } else { %>Vue.extend<% } %>({
  name: "ServeDev",
});
</script>

<template>
  <div id="<%-npmName%>">
    <router-view></router-view>
  </div>
</template>
