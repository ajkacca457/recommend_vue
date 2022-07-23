<template>
    <div class="card p-2 mt-3">
        <h4>{{title}}</h4>
        <p>{{info}}</p>
        <p class="bg-warning text-center py-2">Rating: {{rating}}</p>
        
        <button v-if="hasOwener" class="bg-danger w-25 border-0 rounded text-white">Delete</button>

    </div>


</template>

<script>
export default {
    name:"Recommendation",
    props:["item", "hasOwener"],
    setup(props) {            
        let {title, info, rating}= props.item;
        let hasOwener= props.hasOwener;    
        return {
            title,info,rating, hasOwener
        }

    }
}
</script>

<style>

</style>