<template>
    <div class="mb-3 p-3 rounded h-100 d-flex" id="card">
        <img :src="recommendation.imageUrl" :alt="recommendation.name" class="w-25">
        <div style="margin-left:10px">
            <h5 class="text-decoration-underline">{{recommendation.name}}</h5>
            <p class="m-0"><strong>Category:</strong> {{recommendation.category}}</p>
            <p class="m-0"><strong>Created By:</strong> {{recommendation.creator}}</p>
            <p class="m-0" v-if="recommendation.recommendations"><strong>Number of recommendations:</strong> {{recommendation.recommendations.length}}</p>
            <p class="m-0">{{recommendation.createdAt}} ago.</p>
        </div>
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



</style>