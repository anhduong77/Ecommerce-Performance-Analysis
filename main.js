import {Client} from 'pg'

const con=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Anhduong@4717",
    database:"postgres"
})

con.connect().then(()=>console.log("connected"));