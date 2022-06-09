import { ref } from "vue";

let error= ref(null);
let logout= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
    }

}

let userLogout=()=> {
    return {
        error,
        logout
    }
}

export default userLogout;
