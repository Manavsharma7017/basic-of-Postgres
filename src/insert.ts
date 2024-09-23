import { Client } from "pg";


async function insert(){
    const client2=new Client({
    connectionString:`postgresql://test_owner:8a6eHJRgvxsj@ep-curly-frog-a53ymnf4.us-east-2.aws.neon.tech/test?sslmode=require`
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