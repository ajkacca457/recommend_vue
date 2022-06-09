import { ref } from "vue";

let error= ref(null);
let register= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
    }

}

let userRegister=()=> {
    return {
        error,
        register
    }
}

export default userRegister;
