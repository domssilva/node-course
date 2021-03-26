const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('userpage')
})

router.post('/', (req, res) => {
    const requestParameters = req.body
    const requestParametersMissing = Object.keys(requestParameters).length === 0

    if (requestParametersMissing) {
        throw new Error('missing parameters')
        res.send(400)
    }

    console.log(`user: ${requestParameters.name}`)
    res.send('processing user data...')
})

module.exports = router
