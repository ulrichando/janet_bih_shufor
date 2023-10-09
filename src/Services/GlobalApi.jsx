



const BASE_URL="";

const getPost= axios.get(BASE_URL+'/blogs?populate=*');

 export default {
    getPost
 }