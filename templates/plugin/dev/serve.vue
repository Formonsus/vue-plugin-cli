<script<% if (ts) { %> lang="ts"<% } %>>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServeDev",
});
</script>

<template>
  <div id="<%-npmName%>">
    <router-view></router-view>
  </div>
</template>
