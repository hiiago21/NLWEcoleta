const selectuf = document.querySelector('[name=uf]');
const selectCity = document.querySelector('[name=city]');
const inputUfHidden = document.querySelector('[name=state2]');

function pesquisa(url, seletor){
    return fetch(url)
    .then(resp => { return resp.json()})
    .then(valReturns => {
        Array.from(valReturns).forEach(valReturn => {
            seletor.innerHTML += `<option value="${valReturn.id}">${valReturn.nome}</option>`
        });
    })
}
function popularUf() {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    pesquisa(url,selectuf);
}

popularUf();

function getCitys(event){
    const indexUfSelect = event.target.selectedIndex;
    inputUfHidden.value = event.target.options[indexUfSelect].text;

    const ufValue = event.target.value;
    const urlDinamica = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    pesquisa(urlDinamica,selectCity)
    .then(sel => selectCity.disabled = false);
}


selectuf.addEventListener('change', getCitys);
