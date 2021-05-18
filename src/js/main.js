import getRefs from './get-refs.js';
import countriesCardTpl from '../templates/countries-card.hbs';
import debounce from 'lodash.debounce';
import API from './fetchCountries.js';


import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs();

let searchQuery = '';
 
refs.inputForm.addEventListener(
    'input',
    debounce(() => {
        onInput();
    }, 500),
  );

function onInput () {
   searchQuery = refs.inputForm.value;

   console.log(searchQuery);
    if (!searchQuery) {
      clearCountriesCardMarkup();
        return;
      }

    API.fetchCountries(searchQuery)
    .then(checkingNumberOfCountries)
    .catch(onFatchError)
}

function checkingNumberOfCountries(countries) {
    if (countries.length > 10) {
        clearCountriesCardMarkup();
        aLotOfCoincidences();
    } 
    else if (countries.length <= 10 && countries.length > 1) {
        clearCountriesCardMarkup();
        renderCountriesCardMarkup(countriesCardTpl, countries);
    } else if (countries.length === 1) {
        clearCountriesCardMarkup();
        renderCountriesCardMarkup(countriesCardTpl, countries[0]);
    } else {
        clearCountriesCardMarkup();
      noMatches();
    }
  }
  

function renderCountriesCardMarkup (template, countries){
    const markup = template(countries);
    refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

function clearCountriesCardMarkup() {
    refs.cardContainer.innerHTML = '';
  }
  
  function noMatches() {
    info({
      title: 'Ohhhh, no =(',
      text: 'No matches!!!',
      delay: 1500,
    });
  }
  
  function aLotOfCoincidences() {
    error({
      title: 'Ohhhh, no =(',
      text: 'There are a lot of coincidences. Please specify your request!',
      delay: 4000,
    });
  }

function onFatchError (error) {
  clearCountriesCardMarkup();
    consoloe.log(error);
}