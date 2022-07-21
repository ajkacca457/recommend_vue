import { onSnapshot, orderBy, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { app, RecCollectionRef } from "../firebase/config";


let getCollections=()=> {

    let error= ref(null);
    let isPending= ref(false);
    let documents= ref([]);

    let q= query(RecCollectionRef,orderBy("createdAt"));
            let unsub=onSnapshot(q,(snapshot)=> { 
                isPending.value=true;
                let results=[];
                snapshot.docs.forEach(doc=> {
                results.push({...doc.data(), id:doc.id})
                documents.value=results;
                error.value=null;
                })
            isPending.value=false;
            error.value= null;            
            }, (err)=> {
                documents.value=null;
                isPending.value=false;
                error.value=err.message;
            })
            
         watchEffect((oninvalidate)=> {
            oninvalidate(()=>unsub());
         })   

    return {
        error,
        isPending,
        documents
    }

}

export default getCollections;