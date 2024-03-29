import { ref } from "vue";
import {  ref as storageRef ,uploadBytes,getDownloadURL,deleteObject} from "firebase/storage"
import getCurrentUser from "./getcurrentUser";
import { projectStorage } from "../firebase/config";

const updateStorage=()=> {

        const error= ref(null);
        const url= ref(null);
        const filePath= ref(null);

        const uploadImage=async (file)=> {
            let {user}= getCurrentUser();
            filePath.value=`CollectionImages/${user.value.uid}/${file.value.name}`;
            const imageRef= storageRef(projectStorage,filePath.value); 

            try {
                let res= await uploadBytes(imageRef,file.value);
                url.value= await getDownloadURL(imageRef,filePath.value);
                error.value=null;

            } catch (err) {
                error.value=err.message;
            }


        }

        const deleteImage=async(filePath)=> {
            const imageRef= storageRef(projectStorage,filePath);
            try {
                let res= await deleteObject(imageRef);
                error.value=null;

            } catch (err) {
                error.value=err.message;
            }
        }

    
        return {
            url,filePath, uploadImage, deleteImage
        }
          


}

export default updateStorage;