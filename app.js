fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById("container");
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country-container'
        const countryInfo = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button onclick = "displayCountryDetail('${country.name}')">Detail</button>
       `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });
}
 const displayCountryDetail = name =>{
    //   console.log(name)
    const url =` https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then( res => res.json())
    .then(data =>countryDetail(data[0]))
 }
   
 const countryDetail = country =>{
        const countryDiv = document.getElementById("country-detail");
        countryDiv.innerHTML = `
          <h1>${country.name}</h1>
          <p>Area : ${country.area}</p>
          <p>Population : ${country.population}</p>
          <img src="${country.flag}">
        `
 }