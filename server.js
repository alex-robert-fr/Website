const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/api/hello', (req, res) => {
  res.status(200).json({
    status: 'sucess',
    message: 'Hello world!'
  })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log(`http://localhost:${port}/api/hello`);
})
