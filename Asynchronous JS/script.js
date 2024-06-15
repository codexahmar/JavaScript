"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// AJAX CALLS METHOD

// const renderCountry = function (data) {
//   const html = ` <article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>

//     <p class="country__row"><span>💰</span>${data.currencies.USD.name}</p>

//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// AJAX call country 1
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);
//     //Get neighbour country 2
//     const [neighbour] = data.borders;
//     console.log("These are neighbour", neighbour);
//     if (!neighbour) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(`'this is data 2`, data2);
//       renderCountry(data2);
//     });
//   });
// };
// getCountryAndNeighbour("usa");

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) =>
//     response.json())
//     .then((data) =>
//     renderCountry(data[0]));
// };
// getCountryData("pakistan");

const renderCountry = function (data) {
  console.log("This is data", data);
  const html = ` <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.urd}</p>

    <p class="country__row"><span>💰</span>${data.currencies.PKR.name}</p>

  </div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// FETCH METHOD

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log("This is response",response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData("pakistan");
// btn.addEventListener("click", function () {
//   getCountryData("pakistan");
// });

// CONSUMING PROMISES

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then((pos) => console.log(pos));
// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude, longitude } = pos.coords;
//       return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
//     })

//     .then(function (response) {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("This is Data :", data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(function (response) {
//       if (!response.ok) throw Error(`Country Not Found ${response.status}`);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     })
//     .catch(function (err) {
//       console.error(`${err.message} 💥`);
//     });
// };

// whereAmI();

// ASYNC AWAIT

const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error("Problem getting location");
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem getting location");
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}💥`);
  }
};

whereAmI();
