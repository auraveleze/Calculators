function generateInputFields() {
    let periods = parseInt(document.getElementById('time-seven').value);
    let container = document.getElementById('for-fields-seven');
    container.innerHTML = '';

    for (let i = 1; i <= periods; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        rowDiv.innerHTML = `
            <div class="input-box">
                <label for="income-${i}">Ingresos Periodo ${i}</label>
                <input type="text" id="income-${i}" class="input-field" placeholder="Ingresos">
            </div>
            <div class="input-box">
                <label for="expense-${i}">Gastos Periodo ${i}</label>
                <input type="text" id="expense-${i}" class="input-field" placeholder="Gastos">
            </div>
        `;
        container.appendChild(rowDiv);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateInputFields();
});

function calculateInvestment() {
    let iniInvestment = parseInt(document.getElementById('initial-investment-seven').value.replace(/[.,;]/g, ''));
    let interest = parseFloat(document.getElementById("interest-seven").value.replace(/[%]/g, '')) / 100;
    let periods = parseInt(document.getElementById('time-seven').value);
    let residual = parseInt((document.getElementById('residual-seven').value).replace(/[.,;]/g, ''));

    let tSum = 0;
    let tTotal;
    let id = 1;

    for (let i = 0; i < periods; i++) {
        let ingresos = parseInt((document.getElementById(`income-${id}`).value).replace(/[.,;]/g, ''));
        let gastos = parseInt((document.getElementById(`expense-${id}`).value).replace(/[.,;]/g, ''));

        let flujoNeto = ingresos - gastos;
        let res = (    (flujoNeto)    /    (Math.pow((1 + interest), id))    );
        tSum += res;
        id++;
    }

    if (residual > 0) {
        let resi = ((residual)/(Math.pow((1 + interest), periods)));
        tTotal = -iniInvestment + tSum + resi;
        console.log("tSum:", tSum);
    } else {
        tTotal = -iniInvestment + tSum;
    }
    document.getElementById('netVal-six').value = tTotal.toLocaleString();
}