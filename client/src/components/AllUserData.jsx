import React, { useEffect, useState} from 'react'
import { AllData } from '../services/api';
import {Table,TableBody,TableHead,TableCell,TableRow,styled} from '@mui/material';
const StyleTable=styled(Table)`
   width:90%;
   margin:50px auto 0 auto;
`
const Thead=styled(TableRow)`
  background:#000000;
  &>th{
     color:#fff;
     font-size:20px;
  }
`
const TBody=styled(TableRow)`
    &>td{
      font-size:20px;
    }
`
const AllUserData = () => {
   
  const [users,setUsers]=useState([]);
   useEffect(()=>{
        getalluser();
   },[]);

   const getalluser=async()=>{
        let response=await AllData();
        setUsers(response.data);
         
   }


  return (
      
         <StyleTable>
           <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </Thead>
           </TableHead>
           <TableBody>
                 {
                   users.map(user=>{
                     return(
                         <TBody key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>City:{user.address.city}
                          <TableCell>Street:{user.address.street}</TableCell>
                          <TableCell>Suite:{user.address.suite}</TableCell><br/>
                          <TableCell>Zipcode:{user.address.zipcode}</TableCell>
                          <TableCell>lat:{user.address.geo.lat}</TableCell>
                          <TableCell>log:{user.address.geo.lng}</TableCell>
                          </TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>{user.website}</TableCell>
                          <TableCell>{user.company.name}
                          <TableCell>{user.company.catchPhrase}</TableCell>
                          <TableCell>{user.company.bs}</TableCell>
                          </TableCell>
                         </TBody>
                         
                     )  
                   })
                 }
           </TableBody>
         </StyleTable>

      
  )
}

export default AllUserData;