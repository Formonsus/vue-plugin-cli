<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Counter",
  computed: {
    ...mapState("counterModule", ["counter"])
  },
  methods: {
    ...mapActions({
      increment: "counterModule/incrementCounter",
      decrement: "counterModule/decrementCounter"
    })
  }
});
</script>

<template>
  <div class="counter">
    <p>Count: {{ counter }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>
