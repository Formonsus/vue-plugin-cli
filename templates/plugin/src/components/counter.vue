<template>
  <div class="counter">
    <p>Count: {{ counter }}</p>
    <p>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { mapState, mapActions } from "vuex"

export default defineComponent({
  computed: {
    ...mapState("counterModule", ["counter"])
  },
  methods: {
    ...mapActions({
      increment: "counterModule/incrementCounter",
      decrement: "counterModule/decrementCounter"
    })
  }
})
</script>
