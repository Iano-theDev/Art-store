import ejs from 'ejs'
import sendMail from '../helpers/email';
import mssql from 'mssql'
import { sqlConfig } from '../config/index';

interface User{
userId:string
Name:string                       
Email:string
Role:string
isActive:string
isSent:string
Password:string
createdAt:Date
}
const sendWelcomeEmail = async()=>{
    const pool = await mssql.connect(sqlConfig)
    const users:User[]= await(await pool.request().
    query("SELECT * FROM Users WHERE isSent ='0'")).recordset
    // console.log(users);

for(let user of users){
    ejs.renderFile('templates/index.ejs',{name:user.Name}, async(error, html)=>{
    const message = {
    from: process.env.EMAIL,
    to: user.Email,
    subject: "REGISTRATION SUCCESSFUL",
    html
};

// console.log(html);

 try {
await sendMail(message) 
await pool.request().query(`UPDATE Users SET isSent ='1' WHERE Id ='${user.userId}'`)
 } catch (error) {
    console.log(error);
    
 }  
})
}    
}

export default sendWelcomeEmail

