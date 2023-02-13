import { RequestHandler, Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import { sqlConfig } from '../config/config'
import { Products } from '../models'

interface ExtendedRequest extends Request {
    body: {
        id:string,
        Name:string,
        Description: string,
        Category: string,
        ImageUrl:string,
        Price: number 
    }
}

export const getAllProducts: RequestHandler= async (req, res)=> {

    try {
        const pool = await mssql.connect(sqlConfig)
        const products: Products[] = await (await pool.request().execute('spGetAllProducts')).recordset
        res.status(200).json(products)
    } catch (error:any) {
        res.status(404).json(error.message)
    }

}

export async function addProduct(req:ExtendedRequest, res: Response) {
    try {
        const id = uid()
        const { Name, Description, Category, ImageUrl, Price} = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('id',id)
        .input('name',Name)
        .input('description',Description)
        .input('category',Category)
        .input('price',Price)
        .input('imageUrl',ImageUrl)
        .execute('spAddOrUpdateProduct')
    
        res.status(201).json({message: 'Product added to database'})
    } 
    catch (error:any) {
        res.status(404).json(error.message)
    }


}