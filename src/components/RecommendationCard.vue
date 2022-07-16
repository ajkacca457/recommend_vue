<template>
<router-link :to="{name:'RecommendationDetail', params: {id:recommendation.id} }" >
    <div class="mb-3 p-3 rounded h-100 d-flex justify-content-between" id="card">
        <div class="d-flex">
        <img :src="recommendation.imageUrl" :alt="recommendation.name">
        <div>
            <h5 class="text-decoration-underline m-0">{{recommendation.name}}</h5>
            <p class="m-0"><strong>Created By : </strong>{{recommendation.creator}}</p>
            <p class="m-0"><strong>Created At : </strong>{{recommendation.createdAt}} ago.</p>
        </div>
        </div>

         <div class="m-0" v-if="recommendation.recommendations">
           <p class="m-0">Items:</p> 
           <p class="text-center" id="item">{{recommendation.recommendations.length}}</p>
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
    width:25%;
    border-radius: 5px;
    margin-right:10px ;
}

#item {
    margin-top:0px;
    font-size:25px;
}

a {
    text-decoration: none;
    color:black;
}

</style>