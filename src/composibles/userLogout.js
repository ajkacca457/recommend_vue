import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";


let error= ref(null);

let logout= async()=> {
    error.value= null;

    try {
        let auth=getAuth();
        await signOut(auth);  
        error.value= null;
    } catch (err) {
        error.value=err.message;

    }

}

let userLogout= ()=> {

    return {
        error,
        logout
    }
}


export default userLogout;