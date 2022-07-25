<template>
    <div class="card p-2 mt-3">
        <h4>{{title}}</h4>
        <p>{{info}}</p>
        <p :class="ratingClass">Rating: {{rating}}</p>
        
        <button v-if="hasOwener" class="bg-danger w-25 border-0 rounded text-white" @click="handleDelete">Delete</button>

    </div>


</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:"Recommendation",
    props:["item", "hasOwener"],
    setup(props,context) {            
        let {id,title, info, rating}= props.item;
        let ratingClass= ref(null);

         switch (rating) {
            case "Recommended":
                ratingClass.value="bg-primary text-center py-2 text-white rounded"
                break;
            case "Must Try":
                ratingClass.value="bg-success text-center py-2 text-white rounded"
                break;
            case "Time Pass":
                ratingClass.value= "bg-secondary text-center py-2 text-white rounded"
            break;

            default:
                ratingClass.value= "bg-warning text-center py-2 text-white rounded"
                break;
         }   

        let hasOwener= props.hasOwener;
        
        let handleDelete=()=> {
            context.emit("deleteRecommendation", id);
        }
        
        return {
            title,info,rating, hasOwener,handleDelete,ratingClass
        }
    }
}
</script>

<style>
</style>