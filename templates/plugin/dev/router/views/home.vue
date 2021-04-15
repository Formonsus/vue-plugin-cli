<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let show = ref(true);

    function hideDeveloperInstructions() {
      show.value = false;
    }

    return { show, hideDeveloperInstructions };
  }
});
</script>

<template>
  <div id="pluginHome">
    <div v-if="show" class="developerInstructions">
      <p>
        Welcome to your plugin development environment. This is the place where
        you will be testing your plugin. Please feel free to modify this page,
        add navigation links, or any other element that will make your
        development and testing process easier. This development app should
        represent a real world scenario where your plugin will be used in some
        other applications.
        <br /><br />
        For example good way to modify this page is to add the navigation links
        to different pages of your app or to directly display components.
      </p>
      <span @click="hideDeveloperInstructions" class="hideDeveloperInstructions"
        >Hide instructions</span
      >
    </div>
    <h1>Welcome to <%-npmName%></h1>
    <router-link to="/plugin/welcome">Plugin Welcome Page</router-link>
  </div>
</template>

<style>
#pluginHome {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hideDeveloperInstructions {
  text-decoration: underline;
}
</style>
