import { getDoc,doc } from "firebase/firestore";
import { ref } from "vue";
import { app, db } from "../firebase/config";


let getSingleCollection=(docid)=> {

    let error= ref(null);

    let isPending= ref(false);

    let document= ref(null);


    let collectSingleDoc= async(id)=> {
        error.value= null;
        isPending.value= true;

        try {
            isPending.value= true;
            let docReference=doc(db,"reccollection",id) 
            let response=await getDoc(docReference);    

            if(!response) {
                throw new Error("Collections are unavailable at the moment.")
            }
            
            document.value=response.data();
            isPending.value=false;
            error.value= null;

        } catch (err) {
            
            error.value= err.message;
            isPending.value=false;
        }

    }

    collectSingleDoc(docid);


    return {
        error,
        isPending,
        document
    }

}

export default getSingleCollection;