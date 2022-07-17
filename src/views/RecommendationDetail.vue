<template>

    <div v-if="isPending" class="text-center mt-5">
        <img src="../assets/img/Hourglass.gif" alt="">
    </div>
    <div v-else>
    <div v-if="document">
        <h1>The id for the recommendation : {{document.name}}</h1>
        <p>{{document.info}}</p>
        <img :src="document.imageUrl" alt="">
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

        console.log(document.value);

        let  id = route.params.id;
        return {
            isPending, document
        }
      
    }
}
</script>

<style>

</style>