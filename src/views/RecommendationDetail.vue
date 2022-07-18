<template>

    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    <div v-else>
    <div v-if="document">
        <div class="detail">
             <div class="row">
                  <div class="col-6 card p-2">
                       <div class="d-flex justify-content-between align-items-center">
                        <img :src="document.imageUrl" alt="">
                        <h4>{{document.name}}</h4>
                        </div>
                        <div>
                        <p class="mt-2">{{document.info}}</p>
                        <p class="m-0">Created By : {{document.creator}}</p>
                        <p>Category : {{document.category}}</p>
                        </div>
                    </div>  
            </div>   
            

        </div>
    </div>
    </div>

</template>

<script>
import { useRoute } from 'vue-router';
import getSingleCollection from "../composibles/getSingleCollection";

export default {
    name: "RecommendationDetail",
    setup() {

        let route= useRoute();
        
        let {error,isPending,document}=getSingleCollection(route.params.id);

        console.log(document);

        let  id = route.params.id;
        return {
            isPending, document
        }
      
    }
}
</script>

<style scoped>

.detail { 
  width: 90%;
  max-width: 1600px;
  margin: 1% auto;
}
img {
    max-width: 100px;
    max-height: 100px;
}

</style>