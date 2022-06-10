import { ref } from "vue";

let error= ref(null);
let  isPending= ref(false);
let logout= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
    }

}

let userLogout=()=> {
    return {
        error,
        isPending,
        logout
    }
}

export default userLogout;
