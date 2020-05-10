const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const cardContainer = document.getElementById('innerCarousel');
let data = [];



async function getData() {
    return await fetch(url).then(async (r) => await r.json());
}

function renderizaCards(cards) {
    cardContainer.innerHTML = '';
    cards.map(renderizaCard);
}

function renderizaCard(card) {

    const div = document.createElement('div');

    if (card.name === 'Casa Charmosa Bem Localizada') {
        div.className = "carousel-item active";
        div.innerHTML = `<img src="${card.photo}" class="d-block w-100" style="height: 500px; ">
                         <div class="carousel-caption d-none d-md-block">
                         <h5>${card.name}</h5>
                         <p>Tipo: ${card.property_type}</p>
                         <p>Preço: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card.price)} / Dia</p>                         
                         <p class="total">Total ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card.price)} / 1 Dia<p>`        
    } else {
        div.className = "carousel-item";
        div.innerHTML = `<img src="${card.photo}" class="d-block w-100" style="height: 500px; ">
                         <div class="carousel-caption d-none d-md-block">
                         <h5>${card.name}</h5>
                         <p>Tipo: ${card.property_type}</p>
                         <p>Preço: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card.price)} / Dia</p>                          
                         <p class="total">Total ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card.price)} / 1 Dia<p>`
    }


    cardContainer.appendChild(div);
}

async function main() {
    data = await getData();
    if (data) {
        renderizaCards(data);
    }
}

main();