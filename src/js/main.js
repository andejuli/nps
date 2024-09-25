import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

/* Add this to make it dynamic Step 04 NPS-1 */
document.querySelector('.disclaimer > a').href = parkData.url;
document.querySelector('.disclaimer > a').innerHTML = parkData.fullName;

document.querySelector('title').innerHTML = parkData.fullName;

document.querySelector('.hero-banner img').setAttribute('src', parkData.images[0].url);

document.querySelector('.hero-banner__title').innerHTML = parkData.name;
document.querySelector('#park-des').innerHTML = parkData.designation;
document.querySelector('#states').innerHTML = parkData.states;

//Bro Thompson's code
// const disclaimer = document.querySelector(".disclaimer");
// disclaimer.href = parkData.url;
// disclaimer.innerHTML = parkData.fullName;