import countriesCardTpl from './countries-card.hbs';
import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import API from './api-service.js';
import getRefs from './get-refs.js';


const refs = getRefs();

refs.inputForm.addEventListener('input', onInput);

 
// _.debounce(onInput, 500)
function onInput (e) {
   
    const input = e.currentTarget;
    const searchQuery = input. value;

    API.fetchCountries(searchQuery)
    .then(renderCountriesCard)
    .catch(onFatchError)
}

function renderCountriesCard (countrie){
    const markup = countriesCardTpl(countrie);
    refs.cardContainer.innerHTML = markup;
}

function onFatchError () {
    error => (consoloe.log(error))
}