import { Client } from "pg";

const client2=new Client({
    connectionString:`postgresql://test_owner:8a6eHJRgvxsj@ep-curly-frog-a53ymnf4.us-east-2.aws.neon.tech/test?sslmode=require`
})
async function insert(){
    await client2.connect()
    const result2=await client2.query(`{
        
        }`)
}