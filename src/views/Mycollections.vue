<template>
    <div class="mycollection">
        <h4 class="bg-warning p-1 text-center"> Hello! {{user.displayName}}. Collections that you own are: </h4>

    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    
    <div v-else>
    <div class="col_container">
        <div v-for="doc in properTimeDocuments" :key="doc.id">
          <RecommendationCard :recommendation="doc"/>
        </div>
    </div>
    </div>

    </div>

</template>

<script>

import getCollections from "../composibles/getCollections";
import getCurrentUser from "../composibles/getcurrentUser";
import RecommendationCard from "../components/RecommendationCard.vue";
import { computed } from '@vue/runtime-core';
import {formatDistanceToNow} from "date-fns";

export default {

name:"Mycollections",
components: {
    RecommendationCard
},

setup() {
    let { user }= getCurrentUser();
    
    let query= ["userId", "==", user.value.uid];

    let {error,isPending,documents}= getCollections(query);

       let properTimeDocuments= computed(()=> {

      if(documents.value) {
        return documents.value.map((item)=> {
          let time= formatDistanceToNow(item.createdAt.toDate());
          return {
            ...item, createdAt:time
          }
        })
      }
    })

    return {
        error,
        isPending,
        properTimeDocuments,
        user 
    }

}


}
</script>

<style scoped>

.mycollection {
  
  width: 90%;
  max-width: 1600px;
  margin: 1% auto;

}

.col_container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;

}
@media only screen and (max-width: 728px) {
 .col_container {
  display: block;
}
}


</style>