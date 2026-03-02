const express=require('express')
const cors=require('cors')
const con=require('./dbConnection')

const app=express()
const port=4000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/users', (req, res)=>{
    try {
        con.query('SELECT * FROM users', (err, result)=>{
            if(err){
                return res.status(500).json({
                    message: 'Failed to select users',
                    serverError: err.message
                })
            }
            return res.status(200).json({
                message: 'Users Datas',
                usersData: result
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            serverError: error.message
        })
    }
})

app.post('/create-user', (req, res)=>{
    const { fname, email, age, isActive } =req.body
    if(!fname && !email && !age && !isActive){
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    try {
       con.query(`INSERT INTO users VALUES(NULL, '${fname}', '${email}', '${age}', '${isActive}')`, (err)=>{
        if(err){
            return res.status(500).json({
                message: 'Failed to create new user',
                serverError: err.message
            })
        }
        return res.status(201).json({
            message: 'User created!'
        })
       }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server Error',
            serverError: error.message
        })
    }
})


//starting server
app.listen(port, ()=>{
    console.log(`Server is running port ${port}`)
})