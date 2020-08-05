const { Router } = require('express')

const router = new Router()

router.get('/', (request, response) =>
	response.send(['Karla', 'Jeroen', 'Kelley'])
)

module.exports = router
