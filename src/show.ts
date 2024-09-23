import { Client } from "pg";

async function show(){
    const client3 =new Client({
        connectionString:`postgresql://test_owner:8a6eHJRgvxsj@ep-curly-frog-a53ymnf4.us-east-2.aws.neon.tech/test?sslmode=require`
    })
}