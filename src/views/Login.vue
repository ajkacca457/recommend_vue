<template>
  
<form class="w-25 my-5 mx-auto" id="loginform">

<div class="logo d-flex align-items-center justify-content-center">
<font-awesome-icon icon="arrow-right-to-bracket"/>
<h2 class="text-center" style="margin-left:10px">Login..</h2>
</div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4 w-100">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form>

</template>

<script>
export default {
    name:"Login"
}
</script>

<style scoped>

#loginform {
    background-color:#ffe0e8; ;
    padding: 1%;
    border-radius: 5px;
}

</style>