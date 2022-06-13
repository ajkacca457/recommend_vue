<template>
  <div>
    <div v-if="user"><p>Hello, <strong>{{user.displayName}}</strong></p> </div>
    <div v-else><p>Hello, <strong>Guest!</strong></p> </div>

    <h1>Here are all the recommondation collection. </h1>
</div>

</template>

<script>

import getCurrentUser from "../composibles/getcurrentUser";

export default {

    name:"Reccollections",

  setup() {

    let {user}= getCurrentUser(); 

    return {
      user
    }

  }


}
</script>

<style>

</style>