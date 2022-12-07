import fetch from "node-fetch";
export const UserData=async(request,response)=>{
    try{
          const fetch_response =await fetch('https://jsonplaceholder.typicode.com/users');
          const data=await fetch_response.json();
           console.log(data);
           response.status(200).json(data);
   }catch(error){
       return response.status(500).json(error.message);
       }
 }