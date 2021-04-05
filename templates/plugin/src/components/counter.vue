<template>
  <div class="counter">
    <p>Count: {{ counter }}</p>
    <p>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from "vuex"

export default defineComponent({
  computed: {
    ...mapState('counterModule', ['counter'])
  },
  methods: {
    ...mapActions({
      increment: "counterModule/INCREMENT_COUNTER",
      decrement: "counterModule/DECREMENT_COUNTER"
    })
  }
})
</script>
