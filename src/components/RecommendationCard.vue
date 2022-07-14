<template>
    <div class="mb-3 p-3 rounded h-100 d-flex justify-content-between align-items-center" id="card">
        <div class="d-flex">
        <img :src="recommendation.imageUrl" :alt="recommendation.name">
        <div>
            <h5 class="text-decoration-underline m-0">{{recommendation.name}}</h5>
            <p class="m-0"><strong>Created By: </strong>{{recommendation.creator}}</p>
            <p class="m-0">{{recommendation.createdAt}} ago.</p>
        </div>
        </div>

         <p class="m-0" v-if="recommendation.recommendations"><strong>Items:{{recommendation.recommendations.length}}</strong></p>
    </div>


</template>

<script>
export default {
    name: "RecommendationCard",
    props:["recommendation"],

    setup(props) {
        let {recommendation}= props;

    return {
        recommendation
    }

    }

}
</script>

<style scoped>

#card {
   background-color: #ffe0e8;
}

img {
    width: 20%;
    border-radius: 5px;
    margin-right:10px ;
}



</style>