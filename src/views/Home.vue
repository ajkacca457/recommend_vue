<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="bg-danger text-white">{{message}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    let message= ref("Project Under construction");
    return{
      message
    }
  }
}
</script>
