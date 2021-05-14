const BASE_URL = 'https://restcountries.eu/rest/v2';



function fetchCountries (countrieName) {
    const url = `${BASE_URL}/alpha/${countrieName}`;
    
    return fetch(url)
    .then(response => {
        if (response.ok) {
         return response.json();
        }
        throw new Error(response.statusText);
    })}

export default { fetchCountries };