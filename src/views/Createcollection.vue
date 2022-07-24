<template>
  
<form class="my-5 mx-auto" id="createform" @submit.prevent="handleCollection">

<div class="logo d-flex align-items-center justify-content-center">
<font-awesome-icon icon="pen-fancy" />
<h2 class="text-center" style="margin-left:10px">Create Collection</h2>
</div>

  <!--input group 1 -->
  <div class="form-outline mb-4">
    <label class="form-label" for="coltitle">Name</label>
    <input type="text" class="form-control" id="coltitle" placeholder="Collection name" v-model="collectionName">
  </div>

  <!--input group 2 -->
  <div class="form-outline mb-4">
    <label class="form-label" for="coldescription">Description</label>
    <input type="text" class="form-control" id="coldescription" placeholder="Collection info" v-model="collectionInfo">
  </div>

<!--input group 3 -->
      <div class="form-group col-md-4 w-100">
      <label for="inputcategory" class="mb-2">Category</label>
      <select id="inputcategory" class="form-control mb-4" v-model="category">
        <option selected>Movies</option>
        <option>Books</option>
        <option>Music</option>
        <option>Sports Events</option>
        <option>Tv series</option>
      </select>
    </div>

<!--input group 4 -->

  <div class="form-outline mb-4">
    <label class="form-label" for="coldescription">Upload Collection Cover-Image</label>
    <input type="file" class="form-control" id="colfile" @change="handleFile">
    <p class="text-danger">{{fileError}}</p>
  </div>

  <!-- Submit button -->
  <input type="submit" class="btn btn-primary btn-block mb-4 w-100" key=""/>

</form>

</template>

<script>
import { ref } from '@vue/reactivity';
import createCollection from '../composibles/createCollection';
import getCurrentUser from "../composibles/getcurrentUser";
import { useRouter } from 'vue-router';
import { serverTimestamp } from "firebase/firestore";
import updateStorage from "../composibles/updateStorage";
export default {
    name:"Createcollection",
    setup() {
      let {error, addCollection}= createCollection();
      let {user}= getCurrentUser();
      let router= useRouter();

      let {url,filePath, uploadImage}= updateStorage();

      let collectionName=ref("");
      let collectionInfo=ref("");
      let category=ref("");
      let file= ref(null);
      let fileError=ref(null);

      let handleCollection= async()=> {
       
       if(file.value) {
          await uploadImage(file);
          console.log("image uploaded");

        let collection = {
          name:collectionName.value,
          info: collectionInfo.value,
          category:category.value,
          userId:user.value.uid,
          creator: user.value.displayName,
          imageUrl: url.value,
          filePath:filePath.value,
          recommendations: [],
          createdAt:serverTimestamp()
        }

        let res= await addCollection(collection);
        if (!error.value) {
          router.push({name:"Home"})
        }
       }
      }

    let handleFile=(e)=> {
      // let fileTypes=["image/jpeg","image/jpg","image/png"] && fileTypes.includes(selected.type);
      let selected= e.target.files[0];
      if(selected) {
        file.value=selected;
        fileError.value=null;
      } else {
        file.value= null;
        fileError.value="Please uplaod a supported file";
      }


    }


      return {
        collectionName,collectionInfo,category,handleCollection,error,handleFile,fileError
      }

    }
}
</script>

<style scoped>

#createform {
    background-color:#ffe0e8; ;
    padding: 1%;
    border-radius: 5px;
    width:25%;
}

@media only screen and (max-width: 900px) {
 #createform {
  width:75%
}
}


</style>