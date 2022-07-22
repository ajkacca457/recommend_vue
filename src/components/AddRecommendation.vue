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

    <input type="submit" class="mt-4 bg-success text-white border-0 rounded w-25"/> 

    </form>
</div>


</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:"AddRecommendation",

    setup() {
        let title= ref(null);
        let info= ref(null);
        let rating= ref(null);

        let handleSubmit=()=> {
          console.log(title.value, info.value, rating.value);
        }

    return {
      title, info,rating,handleSubmit
    }


    }

}
</script>

<style>

</style>