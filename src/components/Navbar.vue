<template>
  
<div id="nav">
  <div class="nav-container d-flex justify-content-between align-items-center py-2">
  <div class="logo-container">
    <h4>RECOMMEND.</h4>
  </div>
  
  <div class="list-container">
    <div v-if="user">
      <router-link to="/"><font-awesome-icon icon="house" style="margin-right:5px" />Home</router-link> 
      <router-link :to="{name:'Mycollections'}"><font-awesome-icon icon="archive" style="margin-right:5px"/>My Collections</router-link> 
      <router-link :to="{name:'Createcollection'}"><font-awesome-icon icon="plus" style="margin-right:5px"/>Create Collection</router-link>
      <button id="logout" @click="handleLogout"><font-awesome-icon icon="right-from-bracket" style="margin-right:5px" />logout</button> 
    </div>
      <div v-else>
      <router-link :to="{name:'Login'}">Login</router-link>
      <router-link :to="{name:'Register'}">Register</router-link>

      </div>

  </div>
  
  </div>
  </div>


</template>

<script>
import { ref } from '@vue/reactivity';
import userLogout from "../composibles/userLogout";
import getCurrentUser from "../composibles/getcurrentUser";
export default {
  name:"Navbar",
    setup() {

      let {error, logout} = userLogout();
      let {user}= getCurrentUser();

      let handleLogout= async()=> {
          await logout();
      }


      return {
        user,
        handleLogout,
      }


      }
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

#logout {
  background-color:transparent;
  color: #fa5b83;
  border: 1px solid #fa5b83;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  
}

#logout:hover {
  color: #dc0037;
  border: 1px solid #dc0037;
}

</style>