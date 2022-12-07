import express from 'express'
import { UserData } from '../controller/user-conroller.js';
 const route =express.Router();
 route.get('/user',UserData);
 export default route;