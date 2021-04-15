<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
