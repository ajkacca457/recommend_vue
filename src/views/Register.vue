<template>

<div v-if="isPending" class="text-center mt-5">
  <img src="../assets/img/Hourglass.gif" alt="loading">
</div>

<section v-else>
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;background-color:#ffe0e8">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <div class="d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="user-plus" style="transform:scale(2)"/>
                <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Sign up</p>
                </div>
                <form class="mx-1 mx-md-4" @submit.prevent="handleRegister">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="nameText" class="form-control" v-model="name"/>
                      <label class="form-label" for="nameText">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="emailText" class="form-control" v-model="email" />
                      <label class="form-label" for="emailText">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="passwordText" class="form-control" v-model="password" />
                      <label class="form-label" for="passwordText">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="repeatPassword" class="form-control" v-model="repeatPassword" />
                      <label class="form-label" for="repeatPassword">Repeat your password</label>
                    </div>
                  </div>

                    <!-- if password doesnt match  -->
                  <div class="text-center bg-danger text-white py-2 rounded d-none mb-3" id="errorDiv">
                      Please confirm your password. 
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" class="btn btn-primary btn-lg">
                  </div>

                <!-- if error exists  -->
                <div v-if="error" class="text-center text-danger text-decoration-underline">
                      {{error}}
                </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import { ref } from '@vue/reactivity';
import userRegister from "../composibles/userRegister";
export default {
    name:"Register",
    setup() {

      let {error, isPending, register}= userRegister();

      let name=ref("");
      let email= ref("");
      let password=ref("");
      let repeatPassword=ref("");

      let handleRegister=async()=> {
        if(password.value!==repeatPassword.value) { 
          let errorDiv= document.querySelector("#errorDiv");
          errorDiv.classList.remove("d-none");
          setTimeout(()=> {
            errorDiv.classList.add("d-none");
          },1000)

        } else {
        let res= await register(email.value,password.value,name.value);
        if(!error.value) {
          console.log(res);
        }
        }

      }

      return {
        name,email,password,repeatPassword,handleRegister,error,isPending
      }


    }

}
</script>

<style>

</style>