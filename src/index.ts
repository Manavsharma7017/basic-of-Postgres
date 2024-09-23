import { Client } from 'pg'
 
const client = new Client({
  connectionString:'postgresql://test_owner:8a6eHJRgvxsj@ep-curly-frog-a53ymnf4.us-east-2.aws.neon.tech/test?sslmode=require',
  
})

async function somethhing() {
        await client.connect()
    const result=await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`)
console.log(result)
}
somethhing()
