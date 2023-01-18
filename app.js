const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World This is Barry 2!')
})

console.log('in the node console');

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on PORT: ` ${process.env.PORT}));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })