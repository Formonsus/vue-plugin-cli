<template>
  <div class="counter">
    <counter />
  </div>
</template>

<script>
import { defineComponent } from "vue"

import counter from "../../components/counter.vue"

export default defineComponent({
  components: { counter }
})
</script>
