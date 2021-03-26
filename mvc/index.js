const app = require('express')()
const bodyParser = require('body-parser')

const indexRouter = require(__dirname + '/routers/indexRouter')
const usersRouter = require(__dirname + '/routers/usersRouter')

// config
app.use(bodyParser.json())

// routing
app.use('/', indexRouter)
app.use('/user', usersRouter)

app.listen(9999)