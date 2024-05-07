//* Auto complete --> effective rate application period
const inputField = document.getElementById('autocomplete-input-two');
const autocompleteOptions = document.getElementById('autocomplete-options-two');
const options = ['Mensual', 'Bimestral', 'Trimestral', 'Semestral', 'Anual'];
inputField.addEventListener('focus', showAutocompleteOptions);

function showAutocompleteOptions() {
    autocompleteOptions.innerHTML = '';
    options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('autocomplete-option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => {
        inputField.value = option;
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
    if (!autocompleteOptions.contains(event.target) && event.target !== inputField) {
    hideAutocompleteOptions();
  }
}

//* Calculate option
function calculateInterest() {
    let typeInt =String(document.getElementById('typeInt-two').value);
    let calcValue =Number(document.getElementById('value-calculated-two').value);
    let vPres =Number((document.getElementById("presentVal-two").value).replace(/[.,;]/g, '')); 
    let vFut =Number((document.getElementById("futureVal-two").value).replace(/[.,;]/g, '')); 
    let interest =parseFloat(((document.getElementById("interest-two").value).replace(/[%]/g, ''))/100); 
    let period =String(document.getElementById("autocomplete-input-two").value); 
    let time=Number(document.getElementById("time-two").value); 

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
            document.getElementById("presentVal-two").value = pValue.toLocaleString();

        } else if (calcValue === 2) {
            fValue = typeInt === "simple" ? vPres * (1 + interest * time) : vPres * Math.pow(1 + interest, time);
            document.getElementById("futureVal-two").value = fValue.toLocaleString();

        } else if (calcValue === 3) {
            n = typeInt === "simple" ? (1 / interest) * (vFut / vPres - 1) : Math.log(vFut / vPres) / Math.log(1 + interest);
            document.getElementById("time-two").value = Math.round(n);

        } else if (calcValue === 4) {
            int = typeInt === "simple" ? ((fValue / pValue - 1) / time) * 100 : (Math.pow(fValue / pValue, 1 / time) - 1) * 100;
            document.getElementById("interest-two").value = int;
        }

        if (["mensual", "bimestral", "trimestral", "semestral", "anual"].includes(period)) {
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
        document.getElementById("effectiveRate-two").value = parseFloat(effective*100);
        }
        
        year = time ? Math.round(time) / 12 : Math.round(n) / 12;
        document.getElementById("years-two").value = year;
}