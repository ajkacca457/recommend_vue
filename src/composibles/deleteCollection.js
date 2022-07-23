import { deleteDoc,updateDoc,doc } from "firebase/firestore";
import { ref } from "vue";
import {app,db} from "../firebase/config";


const deleteCollection=()=> {
    let delerror= ref(null);
    let isDeletePending= ref(false);
    
    let deleteItem=async(docId)=> {
        isDeletePending.value=true;
        delerror.value= null;
        let documentReference= doc(db, "reccollection", docId);

        try {
            const res= await deleteDoc(documentReference);
            isDeletePending.value=false;
            return res;            
        } catch (err) {
            delerror.value= err.message;
            isDeletePending.value=false;

        }

    }

    let updateItem=async(docId,recommendation)=> {
        isDeletePending.value=true;
        delerror.value= null;
        let documentReference= doc(db, "reccollection", docId);

        try {
            const res= await updateDoc(documentReference,recommendation);
            isDeletePending.value=false;
            return res;            
        } catch (err) {
            delerror.value= err.message;
            isDeletePending.value=false;

        }

    }



    return {
        delerror,
        isDeletePending,
        deleteItem,
        updateItem
    }


}


export default deleteCollection;