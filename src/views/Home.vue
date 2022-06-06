<template>
  <div class="home">
    <h1 class="bg-danger text-white text-center">{{message}}</h1>
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
