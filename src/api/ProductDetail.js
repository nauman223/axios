import axios from "./index";


export const getAllProductdetail = () =>{ 
    try { 
        return axios.get('/product/12');
    } catch (error) {
        console.log(`error`, error)
        throw error;
    }


}


