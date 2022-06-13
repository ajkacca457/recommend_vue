<template>
  <div>
    <div v-if="user"><p>Hello, <strong>{{user.displayName}}</strong></p> </div>
    <div v-else><p>Hello, <strong>Guest!</strong></p> </div>
    
    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    
    <div v-else>
    <div class="col_container">
        <div v-for="doc in documents" :key="doc.id">
          <RecommendationCard :recommendation="doc"/>
        </div>
    </div>

    </div>

</div>

</template>

<script>

import getCurrentUser from "../composibles/getcurrentUser";
import getCollections from "../composibles/getCollections";
import RecommendationCard from "./RecommendationCard.vue";

export default {

    name:"Reccollections",
    components: {
      RecommendationCard
    },

  setup() {

    let {user}= getCurrentUser(); 

    let {error, isPending, documents}= getCollections();

    console.log(user);

    return {
      user,
      error,
      isPending,
      documents
    }

  }


}
</script>

<style scoped>

.col_container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;

}

</style>