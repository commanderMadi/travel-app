/* Global Variables */
const cityName = document.getElementById('city_name');
const geoNameURI = 'http://api.geonames.org/searchJSON?';
const generateBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let date = new Date();
let newDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();

generateBtn.addEventListener('click', function(e) {
    cityName.innerHTML = '';
    document.getElementById('lat').textContent = 'lat: ';
    document.getElementById('lng').textContent = 'lng: ';
    getThenPost();
});
const getData = (url = '') => {
    console.log(url);
    return fetch(url)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
};

const postData = (url = '', data = {}) => {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const getThenPost = () => {
    console.log('ka boom');
    getData(`${geoNameURI}q=${cityName.value}&maxRows=1&username=cmadi`).then(
        data => {
            postData('/add', {
                date: newDate,
                lat: data.geonames[0].lat,
                lng: data.geonames[0].lng,
                userResponse: cityName.value
            });
            updateUserInterface('/all');
        }
    );
};

const updateUserInterface = (url = '') => {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('lat').textContent += data.lat;
            document.getElementById('lng').textContent += data.lng;
            document.getElementById('date').innerHTML = data.date;
            document.getElementById('content').innerHTML = data.userResponse;
        })
        .catch(err => console.log(err));
};
