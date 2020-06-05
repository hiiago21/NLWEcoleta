const selectuf = document.querySelector('[name=uf]');
const selectCity = document.querySelector('[name=city]');
const inputUfHidden = document.querySelector('[name=state2]');

function pesquisa(url, seletor){
     if(seletor.getAttribute("name") === 'uf'){
        return fetch(url)
        .then(resp => { return resp.json()})
        .then(valReturns => {
            Array.from(valReturns).forEach(valReturn => {
                seletor.innerHTML += `<option value="${valReturn.id}">${valReturn.nome}</option>`
            });
        })
    } else if(seletor.getAttribute("name") === 'city'){
        return fetch(url)
        .then(resp => { return resp.json()})
        .then(valReturns => {
            Array.from(valReturns).forEach(valReturn => {
                seletor.innerHTML += `<option value="${valReturn.nome}">${valReturn.nome}</option>`
            });
        })
    }
    
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

    selectCity.innerHTML = "<option value> Selecione a cidade</option>";
    selectCity.disabled = true;

    pesquisa(urlDinamica,selectCity)
    .then(sel => selectCity.disabled = false);
}


selectuf.addEventListener('change', getCitys);


//Itens de Coleta
const inpurHiddenSelectors = document.querySelector('input[name=items]')

const itensColLi = document.querySelectorAll('.items-grid li');
itensColLi.forEach( it => it.addEventListener('click', handlerSelectedItem));

let selectedItems = [] 

function handlerSelectedItem(event){
    const itemLi = event.target;
    const itemId = itemLi.dataset.id;

    itemLi.classList.toggle("selected");
    
    const alredySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId;
        return itemFound;
    });
    

    //return do findIndex é a posição do array quando encontra e -1 quando nao encontra
    // funçao fiilter cria um novo array só com as diferenças
     if(alredySelected >= 0){
        const newArrayFilter = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId;
            return itemIsDiferent;
        });
        selectedItems = newArrayFilter;

    }else{
        selectedItems.push(itemId);
    }

    inpurHiddenSelectors.value = selectedItems;    
}