import { onSnapshot,doc } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import {app,db} from "../firebase/config";



let getSingleCollection=(docid)=> {

        let error= ref(null);
        let isPending= ref(null);

        let document= ref(null);

        let documentReference= doc(db,"reccollection", docid)


      let unsub=onSnapshot(documentReference,(snapshot)=> {
              isPending.value=true;
                if(snapshot.data()) {
                    document.value= {...snapshot.data(), id:snapshot.id};
                    error.value= null;
                    isPending.value=false;
                } else {
                    isPending.value=true;
                    error.value="the document doesnt exists";
                }              

        }, (err)=> {
            error.value=err.message;
            isPending.value=false;
        })


        watchEffect((onInvalidate)=> {
            onInvalidate(()=> unsub());
        })


    return {error, isPending, document};


}


export default getSingleCollection;
