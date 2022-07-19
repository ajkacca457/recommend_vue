import { onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue";
import { app, RecCollectionRef } from "../firebase/config";


let getCollections=()=> {

    let error= ref(null);

    let isPending= ref(false);

    let documents= ref([]);


    let collectDocs= async()=> {
        error.value= null;
        isPending.value= true;

        try {
            // let response=await getDocs(RecCollectionRef);    

            // if(!response) {
            //     throw new Error("Collections are unavailable at the moment.")
            // }
            
            // response.docs.forEach((doc)=> {
            //     documents.value.push({...doc.data(),id:doc.id});
            // })

            let q= query(RecCollectionRef,orderBy("createdAt"));
            onSnapshot(q,(snapshot)=> {
                let results=[];
                snapshot.docs.forEach(doc=> {
                results.push({...doc.data(), id:doc.id})
                documents.value=results;
                error.value=null;
                })
            })
    
            isPending.value=false;
            error.value= null;

        } catch (err) {
            
            error.value= err.message;
            isPending.value=false;
        }

    }

    collectDocs();


    return {
        error,
        isPending,
        documents
    }

}

export default getCollections;