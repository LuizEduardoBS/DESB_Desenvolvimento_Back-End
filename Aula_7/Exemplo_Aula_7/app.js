const express = require('express') // Variavel express que vai salvar uma requisição
const app = express() // Variável app que armazena o express
const port = 3000

// Cria uma requisição GET
// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// app.get('/', (req, res)=>{
//   res.send('Backend teste')
// })

app.get('/usuario', (req, res) => {
  res.send('Nome do usuario')
})

app.post('/', (req, res) => {
  res.send('Teste post')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})