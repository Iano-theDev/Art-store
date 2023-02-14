import { Router } from "express";
import { Homepage, loginUser, RegisterUser, getallusers, } from "../Controller/authControllers";
import { VerifyToken } from "../Middlewares/verify";



const authroute =Router()

authroute.post('/register',RegisterUser)
authroute.post('/login', loginUser)
authroute.get('/allusers', getallusers)
authroute.get('/home',VerifyToken, Homepage)//protected Route

export default authroute