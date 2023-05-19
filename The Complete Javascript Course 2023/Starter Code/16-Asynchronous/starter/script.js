'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 1_000_000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
         </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/*
// L248 Our First AJAX Call: XMLHttpRequest
// L250 Welcome to Callback Hell
// L251 Promises and the Fetch API
{
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${+(
            data.population / 1_000_000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
       </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      //   console.log(data2);

      // Render country 1
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// Callback hell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
}

// L251 Promises and the Fetch API
// L252 Consuming Promises
// L253 Chaining Promises
// L254 Handling Rejected Promises
// L255 Throwing Errors Manually

{
  //   const getCountryData = function () {
  //     const request = fetch('https://restcountries.com/v2/name/portugal')
  //       .then(function (response) {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         console.log(data);
  //         renderCountry(data[0]);
  //       });
  //   };

  //   const getCountryData = function (country) {
  //     // Country 1
  //     fetch(`https://restcountries.com/v2/name/${country}`)
  //       .then(response => {
  //         console.log(response);

  //         if (!response.ok) {
  //           throw new Error(`Country not found ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         renderCountry(data[0]);
  //         const neighbour = data[0].borders[0];

  //         if (!neighbour) return;

  //         // Country 2
  //         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
  //       })
  //       .then(response => response.json())
  //       .then(data => renderCountry(data, 'neighbour'))
  //       .catch(err => {
  //         console.error(`${err} 💥💥💥`);
  //         renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`);
  //       })
  //       .finally(() => {
  //         countriesContainer.style.opacity = 1;
  //       });
  //   };

  //   btn.addEventListener('click', function () {
  //     getCountryData('portugal');
  //   });

  //   getCountryData('unknowncountry');

  const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

      return response.json();
    });
  };

  const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
      .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if (!neighbour) throw new Error('No neighbour found!');

        // Country 2
        return getJSON(
          `https://restcountries.com/v2/alpha/${neighbour}`,
          'Country not found'
        );
      })
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  };

  btn.addEventListener('click', function () {
    getCountryData('Australia');
  });
}

// L258 The Event Loop in Practice
console.log('Test start'); // 1st
setTimeout(() => console.log('0 sec timer'), 0); // 5th
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3rd

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
}); // 4th

console.log('Test end'); //

// L259 Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisfying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
  });

Promise.resolve('fulfills immediately').then(x => console.log(x));
Promise.reject('rejects immediately').then(x => console.error(x));
*/

// L260 Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.log(err));
console.log('Getting position');

// Imported from Coding Challenge #1
function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Error: Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      const country =
        data.country.toLowerCase() === 'india'
          ? 'republic of india'
          : data.country;

      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`There was an error: ${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', whereAmI);
