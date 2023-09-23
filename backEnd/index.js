const {formatResponse} = require('./mapper/response')
const express = require('express')
const  axios  =  require ( 'axios' )
const { validationRequest } = require('./validation/validation')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.get('/buscaCEP/:cep', async(req, res) => {
  const {cep} = req.params
  const validation = validationRequest(cep)
  if (validation.messageError) {
    return res.status(validation.status).json({erro: validation.messageError})
  }
  const {status, data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  if (data.erro) {
    return res.status(404).json({erro:'Cep não encontrado!'})
  }
  return res.status(status).json(formatResponse(data))
  });


app.listen(port, () => console.log(`APP ouvindo na porta ${port}!`))