function calcularDias() {
    const checkin = document.querySelector('#checkin');
    const checkout = document.querySelector('#checkout');
    const camposTotais = document.getElementsByClassName('total');
    const valores = data;

    let dateIn;
    let dateOut;

    dateIn = new Date(checkin.value);
    dateOut = new Date(checkout.value);

    let diffMilissegundos = dateOut - dateIn;
    let diffSegundos = diffMilissegundos / 1000;
    let diffMinutos = diffSegundos / 60;
    let diffHoras = diffMinutos / 60;
    var diffDias = diffHoras / 24;

    for (let index = 0; index < camposTotais.length; index++) {
        const element = camposTotais[index];
        const valor = valores[index].price;

        if (diffDias > 1) {
            element.textContent = 'Total ' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor * diffDias) + " / " + diffDias + ((diffDias == 1) ? ' Dia' : ' Dias');
        } else if(diffDias == 0 || diffDias == 1){
            element.textContent = 'Total ' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor * 1) + " / " + 1 + ' Dia';
        }

    }

}