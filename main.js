const printToDom = (divId, textToPrint) =>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) =>{
    let domString = '';
    arrayToPrint.forEach((place) =>{
        domString += `<div class="col-12 col-md-4 col-lg-4 wrap">`;
        domString += `<div class = "card">`
        domString +=    `<img src = ${place.cityImage} class = "image">`;
        domString +=    `<div class="card-body">`
        domString +=        `<h1 class ="header">${place.cityState}</h1>`;
        domString +=        `<h2>${place.cityName}</h2>`;
        domString +=    `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom ('placesId',domString);
};

function runThisCodeOnLoad() {
    const placesData = JSON.parse(this.responseText);
    places = placesData.places;
    domStringBuilder(placesData.places);
};

function runThisCodeOnError () {
    console.error('oh shit');
};
S

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', runThisCodeOnLoad);
    myRequest.addEventListener('error', runThisCodeOnError);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
};

const init = () =>{
    getPlacesData();
};
init ();