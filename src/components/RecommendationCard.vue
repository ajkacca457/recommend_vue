<template>
    <div class="mb-3 p-3 rounded h-100" id="card">
            <h3 class="text-decoration-underline">{{recommendation.name}}</h3>
            <p class="m-0"><strong>Excerpt:</strong> {{recommendation.info}}</p>
            <p class="m-0"><strong>Category:</strong> {{recommendation.category}}</p>
            <p class="m-0"><strong>Created By:</strong> {{recommendation.creator}}</p>
            <p class="m-0">{{recommendation.createdAt}}</p>
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