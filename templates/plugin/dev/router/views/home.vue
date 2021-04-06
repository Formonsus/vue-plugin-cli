<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let show = ref(true);

    function hideDeveloperInstructions() {
      show.value = false;
    }

    return { show, hideDeveloperInstructions }
  },
})
</script>


<template>
  <div class="pluginHome">
    <div v-if="show" class="developerInstructions">
      <p>Welcome to your plugin development environment. This is the place where you will be testing your plugin. Please
      feel free to modify this page, add navigation links, or any other element that will make your development and
      testing process easier. This development app should represent a real world scenario where your plugin will be used
      in some other applications.</p>
      <span @click="hideDeveloperInstructions">X</span>
    </div>
    <router-link to="/plugin/counter">Counter</router-link>
  </div>
</template>
