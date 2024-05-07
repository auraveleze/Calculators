//* Auto complete --> effective rate application period
const inputFieldFive = document.getElementById('autocomplete-input-five');
const autocompleteOptions = document.getElementById('autocomplete-options-five');
const options = ['Mensual', 'Bimestral', 'Trimestral', 'Semestral', 'Anual'];
inputFieldFive.addEventListener('focus', showAutocompleteOptions);

function showAutocompleteOptions() {
    autocompleteOptions.innerHTML = '';
    options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('autocomplete-option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => {
        inputFieldFive.value = option;
        hideAutocompleteOptions();
    });
    autocompleteOptions.appendChild(optionElement);
    });
  autocompleteOptions.style.display = 'block';
  document.addEventListener('click', handleOutsideClick);
}

function hideAutocompleteOptions() {
  autocompleteOptions.style.display = 'none';
  document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    if (!autocompleteOptions.contains(event.target) && event.target !== inputFieldFive) {
    hideAutocompleteOptions();
  }
}






function effectiveOrNominal() {
    let i =parseFloat(((document.getElementById("effective-five").value).replace(/[%]/g, ''))/100); 
    let j =parseFloat(((document.getElementById("nominal-five").value).replace(/[%]/g, ''))/100); 
    let prod =String(document.getElementById("autocomplete-input-five").value); 
    let tim=Number(document.getElementById("time-five").value); 

    let m;
    let n;
    let nomi;
    let efec;
    

    if (["Mensual", "Bimestral", "Trimestral", "Semestral", "Anual"].includes(period)) {
        switch (prod) {
            case "Mensual":
                m = tim / 12;
                break;
            case "Bimestral":
                m = tim / 6;
                break;
            case "Trimestral":
                m = tim / 4;
                break;
            case "Semestral":
                m = tim / 2;
                break;
            default:
                m = tim / 1;
        }
    }

    n = tim / 12;
    document.getElementById("years-six").value = n;
    var nominal = document.getElementById('nominal-six');
    var effective = document.getElementById('effective-six');

    if (i) { // efectiva -> nominal
        nomi = m * ( Math.pow(1 + i, ( 1 / ( n* m ))) -1);
        document.getElementById("nominal-five").value = nomi;
        document.getElementById("interest-six").value = int;
        nominal.checked = true;
        
    } else if (j) { // nominal -> efectiva 
        efec = Math.pow( (1 + (j/m)), (n * m) ) - 1;
        document.getElementById("effective-five").value = efec;
        document.getElementById("interest-six").value = int;
        effective.checked = true;
        
    } else {
        alert("Falta elegir una opción");
    }
}


function calculator() {
    let calcValue =Number(document.getElementById('value-calculated-six').value);
    let typeInt =String(document.getElementById('typeInt-six').value);
    let interest =parseFloat(((document.getElementById("interest-six").value).replace(/[%]/g, ''))/100); 
    let period =String(document.getElementById("autocomplete-input-six").value); 
    let vPres =Number((document.getElementById("presentVal-six").value).replace(/[.,;]/g, '')); 
    let vFut =Number((document.getElementById("futureVal-six").value).replace(/[.,;]/g, '')); 
    let time=Number(document.getElementById("time-six").value); 

    if (!typeInt && !calcValue) {
        alert("Falta elegir una opción");
    }

    let pValue;
    let fValue;
    let n;
    let int;
    let effective;
    let year;

        if (calcValue === 1) {
            pValue = typeInt === "simple" ? vFut / (1 + interest * time) : vFut / Math.pow(1 + interest, time);
            document.getElementById("presentVal-one").value = pValue.toLocaleString();

        } else if (calcValue === 2) {
            fValue = typeInt === "simple" ? vPres * (1 + interest * time) : vPres * Math.pow(1 + interest, time);
            document.getElementById("futureVal-one").value = fValue.toLocaleString();

        } else if (calcValue === 3) {
            n = typeInt === "simple" ? (1 / interest) * (vFut / vPres - 1) : Math.log(vFut / vPres) / Math.log(1 + interest);
            document.getElementById("time-one").value = Math.round(n);

        } else if (calcValue === 4) {
            int = typeInt === "simple" ? ((fValue / pValue - 1) / time) * 100 : (Math.pow(fValue / pValue, 1 / time) - 1) * 100;
            document.getElementById("interest-one").value = int;
        }

        if (["Mensual", "Bimestral", "Trimestral", "Semestral", "Anual"].includes(period)) {
            switch (period) {
                case "Mensual":
                    effective = interest / 12;
                    break;
                case "Bimestral":
                    effective = interest / 6;
                    break;
                case "Trimestral":
                    effective = interest / 4;
                    break;
                case "Semestral":
                    effective = interest / 2;
                    break;
                default:
                    effective = interest;
            }
        document.getElementById("effectiveRate").value = parseFloat(effective*100);
        }
        
        year = time ? Math.round(time) / 12 : Math.round(n) / 12;
        document.getElementById("years").value = year;
}