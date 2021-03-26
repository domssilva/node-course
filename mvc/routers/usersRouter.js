const router = require('express').Router()

const usersController = require(__dirname + '/../controllers/usersController')

router.get('/', (req, res) => {
    res.send('userpage')
})

router.post('/', usersController)

module.exports = router
