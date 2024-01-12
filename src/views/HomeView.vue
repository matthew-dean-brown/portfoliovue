<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ $store.state.home[0].Welcome }}</h1>
    <h1 v-for="info in $store.state.home[1].intro" :key="info">
    {{ info }}
    LOLOLOLOLOLOLOLOLOLLO
    </h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // intro:this.$store.state.home
      }
    },
  }
</script>

