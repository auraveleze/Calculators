//* Autocompletar opcion de periodo de aplicacion de tasa efectiva
const inputField = document.getElementById('autocomplete-input');
const autocompleteOptions = document.getElementById('autocomplete-options');

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