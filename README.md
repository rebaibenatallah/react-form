# react an MYSQL for Beginners
### Node.js MYSQL Installation
```
cd server
npm init -y
```
```
npm i express mysql nodemon
```
and create file **index.js** the file name in package.json 
```
"main": "index.js"
```
add (type : module) in package.json file
```
"main:"index.js",
"type":"module"
```
```
"scripts":{
"test": "echo ..."
"start": "modemon index.js"
```
to run **index.js** file 
```
npm start
```
then in index.js create our server code 
```
import express from "express"
```
**Express** This is a back-end web application framework for Node.js. It handles server-side logic, including managing API endpoints, interacting with databases, and serving data to the front-end

```
const app = express()

app.listen(8800,()=>{
  console.log("Connected to server!")
})
```
to connecte the database 
```
const db =mysql.createConnection({
  host:"lockalhost",
  user:"root",
  password:"password",
  database:"name data base"
})

//if there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
request get 
```
app.get("/link",(req,res)=>{
  const q = "select * from table_name";
  db.querry(q,(err,data)=>{
  if(err) return res.json(err)
  reurn res.json(data)
  })
})
```
request post
```
app.post("/link", (req,res)=>{
  const q = "INSERT INTO table ('VAR1', 'VAR2') VALUES (?)"
  const values = ["val1","val2"];

  db.query(q,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("data inserted")
  })
))
```
request post client 
```
app.use(express.json())


const values = [
req.body.val1,
req.body.val2
];
```
