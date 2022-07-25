<template>
<div class="bg-info p-2 rounded">
    <h3>Add Recommendation:</h3>
    <form @submit.prevent="handleSubmit">
<div class="form-group mt-1">
    <label for="Rectitle">Title</label>
    <input type="text" class="form-control" id="Rectitle" placeholder="add name of recommendation" v-model="title">
  </div>

  <div class="form-group mt-1">
    <label for="Recinfo">Info</label>
    <input type="text" class="form-control" id="Recinfo" placeholder="Recommendation info" v-model="info">
  </div>

  <div class="form-group">
      <label for="Rating" class="mb-2">Rating:</label>
      <select id="Rating" class="form-control mb-4" v-model="rating">
        <option selected>Recommended</option>
        <option>Must Try</option>
        <option>Time Pass</option>
      </select>
    </div>

    <p class="errornotice bg-danger text-white p-2 d-none rounded">You need provide title and information</p>
    <p class="notice bg-success text-white p-2 d-none rounded">Your recommendation has been added to the list.</p>


    <input type="submit" class="mt-4 bg-success text-white border-0 rounded w-25"/> 

    </form>
</div>


</template>

<script>
import { ref } from '@vue/reactivity';
import { v4 as uuidv4 } from 'uuid';
import deleteCollection from "../composibles/deleteCollection";

export default {
    name:"AddRecommendation",
    props: ["collection"],

    setup(props) {

      let { updateItem }= deleteCollection();

        let title= ref(null);
        let info= ref(null);
        let rating= ref(null);

        let handleSubmit=async ()=> {

          let newRecommendation= {
            id: uuidv4(), 
            title: title.value,
            info: info.value,
            rating: rating.value
          }

          let errornotice= document.querySelector(".errornotice");
          
          if(title.value===null||info.value===null||rating.value===null) {
            errornotice.classList.remove("d-none");

          setTimeout(()=> {
            errornotice.classList.add("d-none");
          },1000)

          } else {

            await updateItem(props.collection.id, {
            recommendations: [...props.collection.recommendations,newRecommendation]
          })

          let notice= document.querySelector(".notice");

          notice.classList.remove("d-none");

          setTimeout(()=> {
            notice.classList.add("d-none");
          },1000)

          title.value=null;
          info.value=null;
          rating.value=null;
          }

        }

    return {
      title, info,rating,handleSubmit
    }

    }

}
</script>

<style>

</style>