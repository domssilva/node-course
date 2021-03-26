const app = require('express')()
const bodyParser = require('body-parser')

const indexController = require(__dirname + '/routers/indexRouter')
const userController = require(__dirname + '/routers/usersRouter')

// config
app.use(bodyParser.json())

// routing
app.use('/', indexController)
app.use('/user', userController)

app.listen(9999)