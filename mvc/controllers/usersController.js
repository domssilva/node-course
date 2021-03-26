const getObjectLength = (obj) => {
    return Object.keys(obj).length
}

const usersController = (req, res) => {
  const requestParameters = req.body
  const requestParametersSize = getObjectLength(requestParameters)

  if (requestParametersSize === 0) {
      throw new Error('missing parameters')
      res.send(400)
  }

  console.log(`user: ${requestParameters.name}`)
  res.send('processing user data...')
}

module.exports = usersController
