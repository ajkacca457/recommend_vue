<template>

    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    <div v-else>
    <div v-if="document">
        <div class="detail">
             <div class="row">
                  <div class="col-12 col-md-4 col-lg-3 card p-2">
                       <div>
                        <img :src="document.imageUrl" alt="">
                        <h4 class="text-center mt-2">{{document.name}}</h4>
                        <p class="m-0 text-justify">{{document.info}}</p>
                        <div class="d-flex justify-content-between"><p class="my-2 text-secondary" >Category : {{document.category}}</p> <p class="my-2 text-secondary">Owener : {{document.creator}}</p></div>
                        <div v-if="owenerShip">
                            <div v-if="isDeletePending">Deleteing...</div>
                           <button class="bg-danger rounded border-0 p-2 text-white" @click="handleDelete">Delete Collection</button>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-4 col-12 
                                mt-4 mt-md-0 mt-lg-0
                                mb-4 mb-md-0 mb-lg-0">
                        <h4>Available Recommendations: </h4>
                        <Recommendation />
                    </div>

                    <div class="col-12 col-md-4 col-lg-3">
                        <AddRecommendation :collection="document"/>
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
import { useRoute, useRouter } from 'vue-router';
import getSingleCollection from "../composibles/getSingleCollection";
import getCurrentUser from "../composibles/getcurrentUser";
import { computed } from '@vue/runtime-core';
import deleteCollection from "../composibles/deleteCollection";
import updateStorage from "../composibles/updateStorage";
import AddRecommendation from "../components/AddRecommendation.vue";
import Recommendation from "../components/Recommendation.vue";

export default {
    name: "RecommendationDetail",
    components: {
        AddRecommendation,
        Recommendation
    },
    setup() {

        let route= useRoute();
        let router= useRouter();
        
        let { user }= getCurrentUser();

        let {error,isPending,document}=getSingleCollection(route.params.id);

        let {delerror,isDeletePending, deleteItem}= deleteCollection();

        let { deleteImage }= updateStorage();

        let owenerShip= computed(()=> {
            if(user.value && document.value && user.value.uid===document.value.userId) {
                return true;
            } 
        })

        let handleDelete=async()=> {
            if(!delerror.value) {
                await deleteImage(document.value.filePath);
                await deleteItem(route.params.id);
            }
            router.push({
                name:"Home"
            })
        }

        return {
           error, isPending, document, owenerShip,handleDelete, isDeletePending
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
    max-height: 100%;
    object-fit: fill;
}

</style>