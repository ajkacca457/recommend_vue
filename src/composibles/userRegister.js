import { ref } from "vue";

let error= ref(null);
let isPending= ref(false);


let register= async()=> {
error.value= null
    try {
        
    } catch (error) {
        
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
