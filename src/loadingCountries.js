import fetchCountries from "./fetchCountries";
import { countryInfo, countryList } from "./index";
export function onLoadOneCountry(data){
    const countryDescriptionMarkup = data.map(({flags, capital, languages, population, name}) =>{
     const language =  Object.values(languages).join(`, `);
        return `
<div class = "info-section">
        <div class = "title-country" style = "display:flex; align-items:center; gap:5px;"">
        <img src ="${flags.svg}" width = "30" height = "20" alt ="${flags.alt}"><h2 class = "text-title" style = "margin:0;">${name.common}</h2><p style= "margin:0; margin-top: 4px;">(${name.official})</p>
        </div>
    <div><p><b>Capital:</b><pre>${capital}</p></div>
    <div><p><b>Population:</b><pre>${population}</p></div>
    <div><p><b>Languages:</b><pre>${language}</p></div>
</div>
        `;
    }).join(``);
    countryInfo.insertAdjacentHTML(`beforeend`, countryDescriptionMarkup);
}

export function onLoadCountryList(data){
const listMarkup = data.map(({flags, name})=>{
 return `
 <div style= "display: flex;
 align-items: center;
 gap: 5px;"><img src ="${flags.svg}" width = "30" height = "20" alt ="${flags.alt}"><p>${name.common}</p></div>
 `;
}).join(``);
 countryList.insertAdjacentHTML(`beforeend`, listMarkup);
}