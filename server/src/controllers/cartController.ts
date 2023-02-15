import { RequestHandler } from 'express';
import mssql from 'mssql'
import { sqlConfig } from '../config/config';
import { Cart } from '../models';


// get all cart items
export const getAllCartItems:RequestHandler=async(req, res)=>{
    try {
        const pool = await mssql.connect(sqlConfig)
        const cartItems: Cart[] = await (await pool.request().execute('spDisplayAllFromCart')).recordset
        res.status(200).json(cartItems)
    } catch (error:any) {
        res.status(404).json(error.message)
    }
}