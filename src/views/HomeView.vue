<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ intro }}</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        intro:this.$store.state.home
      }
    },
  }
</script>

