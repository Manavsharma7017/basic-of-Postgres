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
}
finally{
    client3.end()
}}

// try {
//     await client.connect(); // Ensure client connection is established
//     // Use parameterized query to prevent SQL injection
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
show()