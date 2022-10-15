import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { markUpBuild } from './js/markUP';
import { onError } from './js/onError';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryCotainer = document.querySelector('.country-list');

const debounced = require('lodash.debounce');

inputEl.addEventListener('input', debounced(onInputHandl, DEBOUNCE_DELAY));

function onInputHandl(e) {
  if (e.target.value.trim() === '') {
    return;
  }
  fetchCountries(e.target.value.trim())
    .then(data => markUpBuild(data, countryCotainer))
    .catch(error => onError(countryCotainer));
}
