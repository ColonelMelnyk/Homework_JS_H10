export default function fetchCountries(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,population,languages`).then(data =>{
      if(!data.ok){
          throw new Error(data.status)
      }
    return data.json();
  })
  .catch(error => console.log(error));
  }