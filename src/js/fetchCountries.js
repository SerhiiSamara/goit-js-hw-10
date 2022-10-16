const BASE_URL = 'https://restcountries.com/v2/';

export function fetchCountries(country) {
  const url = `${BASE_URL}name/${country}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Fail response!');
    }
    return response.json();
  });
}
