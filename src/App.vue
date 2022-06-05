<template>
  <Navbar/>
  <router-view/>
</template>


<script>
import Navbar from './components/Navbar.vue';
export default {
  name:"App",
  components: {
    Navbar
  }
}



</script>


<style>
#app {
font-family: 'Balthazar', serif;
color: #2c3e50;
}

</style>
