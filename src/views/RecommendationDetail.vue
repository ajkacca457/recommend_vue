<template>

    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    <div v-else>
    <div v-if="document">
        <div class="detail">
             <div class="row">
                  <div class="col-4 card p-2">
                       <div>
                        <img :src="document.imageUrl" alt="">
                        <h4 class="text-center mt-2">{{document.name}}</h4>
                        <p class="m-0 text-center">{{document.info}}</p>
                        <p class="m-0 text-end">Created By : {{document.creator}}</p>
                        <p class="m-0 text-end">Category : {{document.category}}</p>
                        </div>
                    </div>  
            </div>   
            

        </div>
    </div>
    <div v-if="error">
        <p class="bg-danger text-center">{{error}}</p>
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
    max-width:100%;
}

</style>