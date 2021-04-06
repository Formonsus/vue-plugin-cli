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
      Welcome to your plugin development environment.
      <span @click="hideDeveloperInstructions">X</span>
    </div>
    <router-link to="/plugin/counter">Counter</router-link>
  </div>
</template>
