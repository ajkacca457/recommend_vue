import { ref } from "vue";

let error= ref(null);
let login= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
    }

}

let userLogin=()=> {
    return {
        error,
        login
    }
}

export default userLogin;
