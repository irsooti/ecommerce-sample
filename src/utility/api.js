import axios from "axios";


export const callElem = () => axios.get('/products').then(res=>res.data)