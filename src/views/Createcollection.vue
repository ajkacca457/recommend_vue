<template>
  
<form class="w-25 my-5 mx-auto" id="createform">

<div class="logo d-flex align-items-center justify-content-center">
<font-awesome-icon icon="pen-fancy" />
<h2 class="text-center" style="margin-left:10px">Create Collection</h2>
</div>

  <!--input group 1 -->
  <div class="form-outline mb-4">
    <label class="form-label" for="coltitle">Name</label>
    <input type="text" class="form-control" id="coltitle" placeholder="Collection name">
  </div>

  <!--input group 2 -->
  <div class="form-outline mb-4">
    <label class="form-label" for="coldescription">Description</label>
    <input type="text" class="form-control" id="coldescription" placeholder="Collection info">
  </div>

<!--input group 3 -->
      <div class="form-group col-md-4 w-100">
      <label for="inputcategory" class="mb-2">Category</label>
      <select id="inputcategory" class="form-control mb-4">
        <option selected>Movies</option>
        <option>Books</option>
        <option>Music</option>
        <option>Sports Events</option>
        <option>Tv series</option>
      </select>
    </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4 w-100">Create Collection</button>

</form>

</template>

<script>
export default {
    name:"Createcollection"
}
</script>

<style scoped>

#createform {
    background-color:#ffe0e8; ;
    padding: 1%;
    border-radius: 5px;
}

</style>