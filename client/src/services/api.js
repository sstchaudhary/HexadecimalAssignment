import axios from 'axios';
const URL="http://localhost:8000";
export const AllData=async()=>{
    try{
        return await axios.get(`${URL}/user`); 
    }
    catch(error){
         console.log("erro while calling add user api",error);
    }
    
}