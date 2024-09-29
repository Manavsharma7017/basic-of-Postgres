import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
interface user{
    email   : string,
    username :string,
    lastname :string,
    password :string,
}
const newuser=async(user:user )=>{
 const data=await prisma.user.create({
    data:{
        email :user.email,
        username :user.username,
        lastname :user.lastname,
        password :user.password
       }
 })
 return data
}
const userdata={
    email:"manav@as",
    username:"manav",
    lastname:"shamra",
    password:"12345"
}
newuser(userdata).then((data)=>{
    console.log(data)
})
