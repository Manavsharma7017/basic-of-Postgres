import { Client } from "pg";
import * as dotenv from "dotenv";
 dotenv.config();
async function show(){
    const client3 =new Client({
        connectionString:process.env.POSTGRES_URL
    })
    await client3.connect()
    try{
    const result3=await client3.query(`
        SELECT * FROM users
        `)
        console.log(result3)
}catch(e){
    console.log(e)
}}
show()