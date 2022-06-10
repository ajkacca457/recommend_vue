import { ref } from "vue";

let error= ref(null);
let isPending= ref(false);


let login= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
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
