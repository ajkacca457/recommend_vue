<template>
    <div class="card p-2 mt-3">
        <h4>{{title}}</h4>
        <p>{{info}}</p>
        <p class="bg-warning text-center py-2">Rating: {{rating}}</p>
        
        <button v-if="hasOwener" class="bg-danger w-25 border-0 rounded text-white" @click="handleDelete">Delete</button>

    </div>


</template>

<script>
export default {
    name:"Recommendation",
    props:["item", "hasOwener"],
    setup(props,context) {            
        let {id,title, info, rating}= props.item;
        let hasOwener= props.hasOwener;
        
        let handleDelete=()=> {
            context.emit("deleteRecommendation", id);
        }
        
        return {
            title,info,rating, hasOwener,handleDelete
        }

    }
}
</script>

<style>

</style>