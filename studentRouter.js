const { Router } = require('express')

const router = new Router()

router.get('/', (request, response) => response.send(['Alex', 'Ali', 'Bart']))

module.exports = router
