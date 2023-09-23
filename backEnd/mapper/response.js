const formatResponse = (res) => {
  return {
    publicPlace: res.logradouro,
    complement: res.complemento,
    neighborhood: res.bairro,
    locality: res.localidade,
    uf: res.uf,
    cep: res.cep
  }
}

module.exports = {formatResponse}