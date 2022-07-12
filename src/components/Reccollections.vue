<template>
  <div>
    <div v-if="user"><p>Hello, <strong>{{user.displayName}}</strong></p> </div>
    <div v-else><p>Hello, <strong>Guest!</strong></p> </div>
    
    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    
    <div v-else>
    <h6><strong>Movies</strong></h6>
    <div class="col_container">
        <div v-for="doc in moviesDocuments" :key="doc.id">
          <RecommendationCard :recommendation="doc"/>
        </div>
    </div>
    <hr>
    <h6> <strong>Books</strong></h6>
    <div class="col_container">
        <div v-for="doc in booksDocuments" :key="doc.id">
          <RecommendationCard :recommendation="doc"/>
        </div>
    </div>

    <hr>
    <h6> <strong>Music</strong></h6>
    <div class="col_container">
        <div v-for="doc in musicDocuments" :key="doc.id">
          <RecommendationCard :recommendation="doc"/>
        </div>
    </div>

    <hr>
    <h6> <strong>Sports</strong></h6>
    <div class="col_container">
        <div v-for="doc in sportsDocuments" :key="doc.id">
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
import { computed } from '@vue/runtime-core';
import {formatDistance} from "date-fns";

export default {

    name:"Reccollections",
    components: {
      RecommendationCard
    },

  setup() {

    let {user}= getCurrentUser(); 

    let {error, isPending, documents}= getCollections();


    let moviesDocuments= computed(()=> {
      if(documents.value) {
        return documents.value.filter((item)=> {
          return item.category==="Movies"
        })
      }
    })


    let booksDocuments= computed(()=> {
      if(documents.value) {
        return documents.value.filter((item)=> {
          return item.category==="Books"
        })
      } 
    })

    let musicDocuments= computed(()=> {
      if(documents.value) {
          return documents.value.filter((item)=> {
            return item.category==="music"
          })
      }
    })

    let sportsDocuments= computed(()=> {
      if(documents.value) {
        return documents.value.filter((item)=> {
          return item.category==="Sports Events"
        })
      }
    })

    return {
      user,
      error,
      isPending,
      documents,
      moviesDocuments,
      booksDocuments,
      musicDocuments,
      sportsDocuments
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