<template>
<div class="bg-info p-2 rounded">
    <h3>Add Recommendation:</h3>
    <form>
<div class="form-group mt-1">
    <label for="Rectitle">Title</label>
    <input type="text" class="form-control" id="Rectitle" placeholder="add name of recommendation">
  </div>

  <div class="form-group mt-1">
    <label for="Recinfo">Info</label>
    <input type="text" class="form-control" id="Recinfo" placeholder="Recommendation info">
  </div>

    <input type="submit" class="mt-4 bg-success text-white border-0 rounded w-25"/> 

    </form>
</div>


</template>

<script>
export default {
    name:"AddRecommendation"
}
</script>

<style>

</style>