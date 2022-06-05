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
font-family: 'Metal';
color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: navy;
}
</style>
