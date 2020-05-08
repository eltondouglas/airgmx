const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const cardContainer = document.getElementById('innerCarousel');



async function getData() {
    return await fetch(url).then(async (r) => await r.json());
}

function renderizaCards(cards) {
    cardContainer.innerHTML = '';
    cards.map(renderizaCard);
}

function renderizaCard(card) {

    const div = document.createElement('div');

    if(card.name === 'Casa Charmosa Bem Localizada'){
        div.className = "carousel-item active";
        div.innerHTML = `<img src="${card.photo}" class="d-block w-100" style="height: 500px; ">`
    } else {
        div.className = "carousel-item";
        div.innerHTML = `<img src="${card.photo}" class="d-block w-100" style="height: 500px; ">`
    }


    cardContainer.appendChild(div);
}

async function main() {
    let data = await getData();
    if (data) {
        renderizaCards(data);
    }
}

main();