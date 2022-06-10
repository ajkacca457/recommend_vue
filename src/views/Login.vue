<template>
  
<div v-if="isPending" class="text-center mt-5">
  <img src="../assets/img/Hourglass.gif" alt="">
</div>

<div v-else>

<form class="w-25 my-5 mx-auto" id="loginform" @submit.prevent="handleLogin">

<div class="logo d-flex align-items-center justify-content-center">
<font-awesome-icon icon="arrow-right-to-bracket"/>
<h2 class="text-center" style="margin-left:10px">Login..</h2>
</div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" v-model="email" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"  v-model="password"/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- Submit button -->
  <input type="submit" class="btn btn-primary btn-block mb-4 w-100">

  <div v-if="error" class="text-center text-danger text-decoration-underline mb-3">{{error}}</div>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <router-link :to="{'name':'Register'}">Register</router-link></p>
  </div>
</form>

</div>



</template>

<script>
import { ref } from '@vue/reactivity';
import userLogin from "../composibles/userLogin";
export default {
    name:"Login",
    setup() {

      let {error,isPending, login}= userLogin();

      let email= ref("");
      let password=ref("");

      let handleLogin= async()=> {
        let res= await login(email.value,password.value);
        if(!error.value) {
          console.log(res);
        }
      }

    return {
      email,password,handleLogin,error,isPending
    }

    }
}
</script>

<style scoped>

#loginform {
    background-color:#ffe0e8; ;
    padding: 1%;
    border-radius: 5px;
}

</style>