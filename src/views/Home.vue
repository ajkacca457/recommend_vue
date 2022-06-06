<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="bg-danger text-white">{{message}}</h1>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup() {
    let message= ref("Project Under construction");
    return{
      message
    }
  }
}
</script>
