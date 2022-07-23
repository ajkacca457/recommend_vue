<template>
<router-link :to="{name:'RecommendationDetail', params: {id:recommendation.id} }" >
    <div class=" h-100 d-flex justify-content-between mt-2" id="card">
        <div class="d-flex">
        <img :src="recommendation.imageUrl" :alt="recommendation.name">
        <div class="my-2">
            <h5 class="m-0">{{recommendation.name}}</h5>
            <p class="m-0"><strong class="highlight">Created By : </strong>{{recommendation.creator}}</p>
            <p class="m-0"><strong class="highlight">Created At : </strong>{{recommendation.createdAt}} ago.</p>
        </div>
        </div>

         <div class="m-0" v-if="recommendation.recommendations">
           <p class="text-center px-2" id="item">{{recommendation.recommendations.length}} items</p>
        </div>
    </div>
    </router-link>


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
    max-width:100px;
    max-height:100px;
    margin-right:10px ;
    object-fit:fill;
}

#item {
    font-size: 110%;
    opacity:.6;
    margin-top:10px;
}

a {
    text-decoration: none;
    color:black;
}
.highlight {
    opacity:.6;
}

</style>