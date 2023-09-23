const cep = document.getElementById("cep")
const msgErro = document.getElementById('msgError')
const button = document.getElementById('button')
const responseList = document.getElementById('responseList')

function disabledButton() {
  if (cep.value.length == 8) {
    button.disabled = false
  }else{
    button.disabled = true
  }
}

cep.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getCep()
  }
});

async function getCep() {
  if (cep.value.length == 8) {
      const resApi = await axiosGet(cep.value)
      inputValue()
    if (resApi.status != 200) {
      msgErro.innerHTML = `<span id="error" class="error">${resApi.data.erro}</span>`
    }
    objectRes(resApi.data)
  }

} 

function inputValue() {
  button.disabled = true
  cep.value = ''
}

async function axiosGet(cep) {
  const {status, data} = await axios.get(`http://localhost:3002/buscaCEP/${cep}`)
              .then((res) => {
                return res
              })
              .catch((error) => {
                return error.response; 
              })

  return {status, data};
}

function objectRes(responseCep) {
  const list = document.createElement("div")
  list.innerHTML =   
  `<div class="cep">
  <div class="content-align">
    <div class="info">
      <strong>CEP: </strong>${responseCep.cep}
    </div>
    <div class="info">
        <strong>Logradouro: </strong>${responseCep.publicPlace}
    </div>
    <div class="info">
        <strong>Complemento: </strong> ${responseCep.complement}
    </div>
  </div>
  <div class="content-align">
    <div class="info">
      <strong>Bairro: </strong>${responseCep.neighborhood}
    </div>
    <div class="info">
      <strong>Localidade: </strong>${responseCep.locality}
    </div>
    <div class="info">
      <strong>UF: </strong> ${responseCep.uf}
    </div>
  </div>
</div>`
  responseList.appendChild(list)
}