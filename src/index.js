import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
import { onLoadCountryList, onLoadOneCountry} from './loadingCountries';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector(`[type="text"]`);
 export const countryList = document.querySelector(".country-list");
 export const countryInfo = document.querySelector(".country-info");
 function clearingData(){
    countryInfo.innerHTML = ``;
    countryList.innerHTML = ``;
}
inputEl.addEventListener("input", debounce(onInput, 300));
function onInput(event){
    event.preventDefault();
    clearingData();
    const country = event.target.value;
    fetchCountries(country).then(data =>{
        if(data.length > 10){
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
        if(data.status === 404){
            Notiflix.Notify.failure('Oops, something went wrong');
        }
        if( data.length === 1){
         onLoadOneCountry(data);

        }
        if(data.length <= 10 && data.length >= 2){
         onLoadCountryList(data);
             
        }

    }).catch(error =>{
        Notiflix.Notify.failure(`Oops, there is no country with that name`);
        
    })
}

