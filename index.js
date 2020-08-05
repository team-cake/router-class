const express = require('express')
const app = express()

const studentRouter = require('./studentRouter')
const teacherRouter = require('./teacherRouter')

app.use('/students', studentRouter)
app.use('/teachers', teacherRouter)

const PORT = 4000

app.listen(PORT, () => {
	console.log(`🚀 Server started at port ${PORT}!`)
})
