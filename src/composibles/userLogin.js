import { ref } from "vue";
import {app} from "../firebase/config";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
 
let error= ref(null);
let isPending= ref(false);


let login= async(email,password)=> {
error.value= null;
isPending.value=true;
    try {
        let auth= getAuth();
        let response= await signInWithEmailAndPassword(auth,email,password);

        if(!response) {
            throw new Error("Invalid credintial.Try agian.")
        }

        error.value=null;
        isPending.value=false;
        return response;
        
    } catch (err) {
        error.value=err.message;
        isPending.value=false;


    }

}

let userLogin=()=> {
    return {
        error,
        isPending,
        login
    }
}

export default userLogin;
