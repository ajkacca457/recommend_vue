<template>
  <div class="home">
    <Reccollections/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Reccollections from "../components/Reccollections.vue";

export default {
  name: 'Home',
  components: {
    Reccollections
  },
  setup() {
    let message= ref("Project Under construction");
    return{
      message
    }
  }
}
</script>

<style scoped>
.home { 
  width: 90%;
  max-width: 1600px;
  margin: 1% auto;
}


</style>