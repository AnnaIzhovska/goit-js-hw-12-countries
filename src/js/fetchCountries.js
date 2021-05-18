const BASE_URL = 'https://restcountries.eu/rest/v2/name';

const fetchCountries = countrieName => fetch(`${BASE_URL}/${countrieName}`).then(response => response.json());
export default { fetchCountries };
        
// function fetchCountries (countrieName) {
//     const url = `${BASE_URL}/${countrieName}`;
    
//     return fetch(url)
//     .then(response => {
//         if (response.ok) {
//          return response.json();
//         }
//         })}

        // import axios from 'axios';

// axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';

// function fetchCountries (countrieName) {
// axios
// .get(`/alpha/${countrieName}`)
// .then(response => {
//     if (response.ok) {
//      return response.json();
//     }
//     throw new Error(response.statusText);
// })}
