<template>
  <nav-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import NavComp from './components/NavComp.vue';
import FooterComp from './components/FooterComp.vue'

export default {
  components:{
    NavComp,
    FooterComp
  },
  computed:{
    getData(){
      this.$store.dispatch('getData')
    }
  },
  mounted(){
    this.getData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
