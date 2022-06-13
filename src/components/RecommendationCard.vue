<template>
    <div class="mb-3 p-3 ">
            <h2>{{recommendation.name}}</h2>
            <p>{{recommendation.info}}</p>
            <p>{{recommendation.category}}</p>
            <p>{{recommendation.creator}}</p>
            <p>{{recommendation.createdAt}}</p>
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

<style>

</style>