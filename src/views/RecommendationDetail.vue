<template>
  
    <h1>The id for the recommendation : {{id}}</h1>

</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: "RecommendationDetail",
    setup() {
        let route= useRoute();
        let  id = route.params.id;
        return {
            id
        }
      
    }
}
</script>

<style>

</style>