import { Client } from "pg";
import * as dotenv from "dotenv";
 dotenv.config();

async function insert(){
    const client2=new Client({
    connectionString:process.env.POSTGRES_URL
})
try{
    await client2.connect()
    const result2=await client2.query(`INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');`)
    console.log(result2)
}catch(e){
    console.log(e)
}finally{
    await client2.end()
}}
insert()