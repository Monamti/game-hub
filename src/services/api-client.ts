import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '0b7923615f71443ca901fc12bb9f137f'
    }
    
})