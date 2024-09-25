import { Client } from "pg";
import * as dotenv from "dotenv";
 dotenv.config();

 async function tryit (){
    const client4 =new Client({
        connectionString:process.env.POSTGRES_URL
    })
    await client4.connect()
    try{
       
    // await client4.query(`CREATE TABLE addresses (
    // id SERIAL PRIMARY KEY,
    // user_id INTEGER NOT NULL,
    // city VARCHAR(100) NOT NULL,
    // country VARCHAR(100) NOT NULL,
    // street VARCHAR(255) NOT NULL,
    // pincode VARCHAR(20),
    // created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    // FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);`)

    await client4.query(`INSERT INTO addresses (user_id, city, country, street, pincode)
         VALUES (2, 'New York', 'USA', '123 Broadway St', '10001');`) 
    const res =await client4.query(`SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;`)
      console.log(res)
    }catch(e){
        console.log(e)
    }
    finally{
     
              await client4.end()
    }
 }
 tryit()