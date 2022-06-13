import { ref } from "vue";
import { app } from "../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let auth= getAuth();
let user= ref(auth.currentUser);

onAuthStateChanged(auth, (_user)=> {
    user.value= _user;
    
})


let getCurrentUser= ()=> {

    return {
        user
    }

}


export default getCurrentUser;