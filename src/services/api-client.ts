import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '8a771cc55fda4d27aadcfdd498cb2ae6'
    }
    
})