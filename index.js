const express = require('express')
const app = express()

app.listen(3000, () => console.log('http://localhost:3000'))

app.get('/', (req, res) => res.json({ message: ':D'}))