import { ref } from "vue";
import { app } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"



let error= ref(null);
let isPending= ref(false);


let register= async(email,password,name)=> {
error.value= null;
isPending.value=true;
    try {
        let auth= getAuth();
        let response= await createUserWithEmailAndPassword(auth,email,password);
        if(!response) {
            throw new Error("User cant be created. Try again");
        }

        await updateProfile(response.user,{
            displayName:name
        });
         
        error.value=null;
        isPending.value=false; 
        return response
        
    } catch (err) {
        error.value=err.message;
        isPending.value= false;
    }

}

let userRegister=()=> {
    return {
        error,
        isPending,
        register
    }
}

export default userRegister;
