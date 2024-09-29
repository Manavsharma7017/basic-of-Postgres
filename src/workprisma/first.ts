import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
interface user{
    email   : string,
    username :string,
    lastname :string,
    password :string,
}
interface updateuser{
    username?:string,
    lastname?:string,
    password? :string,
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


const updateuserf =async(user:updateuser)=>{
    const data=await prisma.user.update({
        where:{
            id:1
        },
        data:{
            username:user.username,
            lastname:user.lastname,
            password:user.password,
        }
    })
    return data
}
const userdata2={
    username:"manan",
    lastname:"shamra ji",
}
updateuserf(userdata2).then((data)=>{
    console.log(data)
})