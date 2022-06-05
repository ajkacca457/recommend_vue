<template>
  
<div id="nav" class="d-flex justify-content-between align-items-center px-2 py-2 px-1">
  <div class="logo-container">
    <h4>RECOMMEND.</h4>
  </div>
  
  <div class="list-container">
     <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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

</style>