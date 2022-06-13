import { ref } from "vue";
import {app,RecCollectionRef } from "../firebase/config";
import {addDoc} from "firebase/firestore";

let createCollection = ()=> {

    let error= ref(null);

let addCollection= async(doc)=> {

    error.value= null;
    try {
        let response= await addDoc(RecCollectionRef, doc)
        if (!response) {
            throw new Error("Collection cant be created.")
        }
        error.value= null;

    } catch (err) {
        
        error.value= err.message;
        
    }

}
    return {
        error,
        addCollection
    }
}


export default createCollection;