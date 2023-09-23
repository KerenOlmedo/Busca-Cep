const validationRequest = (cep) => {
  let messageError
  if (cep.length != 8) {
    messageError = 'Informe um CEP válido, o CEP deve ter 8 caracteres.'
  }
  if (isNaN(cep)) {
    messageError = 'Informe um CEP válido, o CEP deve ter apenas caracteres numéricos.'
  }
  return {
    status : 400,
    messageError
  }
}

module.exports = {validationRequest}