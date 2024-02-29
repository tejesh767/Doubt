const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
app.use(express.json())
const dbPath = path.join(__dirname, 'data.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(5000, () => {
      console.log('Server Running at http://localhost:5000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()
app.post('/userlogin', async (request, response) => {
  const userDetails = request.body
  const {username, password} = userDetails
  console.log(username)
  const addBookQuery = `INSERT INTO customer (username,password) VALUES("${username}","${password}");`
  const dbResponse = await db.run(addBookQuery)
  const bookId = dbResponse.lastID
  response.status(200).send('Page Not found')
})
module.exports = app
