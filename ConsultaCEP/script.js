let cep = document.querySelector('#cep')
let address = document.querySelector('#address')
let neighborhood = document.querySelector('#neighborhood')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let ibge = document.querySelector('#ibge')

cep.addEventListener('blur', function(e){
    let cep = e.target.value
    let script = document.createElement('script')
    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=popularForm`
    document.body.appendChild(script)
})

function popularForm(resposta){
    if('erro' in resposta){
        alert('CEP não encontrado')
        return
    }

    
    address.value = resposta.logradouro
    neighborhood.value = resposta.bairro
    city.value = resposta.localidade
    state.value = resposta.uf
    ibge.value = resposta.ibge
}
