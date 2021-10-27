import axios from "./index";


export const getAllProduct = () =>{ 
    try { 
        return axios.get('/products');
    } catch (error) {
        console.log(`error`, error)
        throw error;
    }


}

