<template>
  
<div id="nav">
  <div class="nav-container d-flex justify-content-between align-items-center py-2">
  <div class="logo-container">
    <h4>RECOMMEND.</h4>
  </div>
  
  <div class="list-container">
     <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link :to="{name:'Login'}">Login</router-link>
      <router-link :to="{name:'Register'}">Register</router-link>
  </div>
  
  </div>
  </div>


</template>

<script>
export default {
        name:"Navbar"
}
</script>

<style scoped>
#nav {
  background-color: #ffe0e8;
}

#nav a {
  color: #fa5b83;
  text-decoration: none;
  font-size: 1em;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #dc0037;
  text-decoration: underline;
}

.nav-container {
  width: 90%;
  max-width: 1600px;
  margin: auto;
}

</style>