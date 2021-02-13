const express =require('express')
const bodyparser =require('body-parser')
const cors = require('cors')
const indexRouter = require('./routes/indexRouter')

const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/',indexRouter)

app.listen(process.env.PORT || 4000,()=>console.log('listening'))