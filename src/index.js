document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherByLocation, showError);
    } else {
        showAlert('Geolocation is not supported by this browser.');
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeatherDataByCity(city);
    } else {
        showAlert('Please enter a city name.');
    }
});

function getWeatherByLocation(position) {
    const { latitude: lat, longitude: lon } = position.coords;
    fetchWeatherData(lat, lon);
}

function showError(error) {
    const errorMessages = {
        1: 'User denied the request for Geolocation.',
        2: 'Location information is unavailable.',
        3: 'The request to get user location timed out.',
        0: 'An unknown error occurred.'
    };
    showAlert(errorMessages[error.code] || errorMessages[0]);
}

function fetchWeatherData(lat, lon) {
    const apiKey = process.env.API_KEY; // Secure API key usage
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => handleFetchResponse(response))
        .then(data => updateWeatherCard(data))
        .catch(handleFetchError);
}

function fetchWeatherDataByCity(city) {
    const apiKey = process.env.API_KEY; // Secure API key usage
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => handleFetchResponse(response))
        .then(data => updateWeatherCard(data))
        .catch(handleFetchError);
}

function handleFetchResponse(response) {
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
}

function handleFetchError(error) {
    console.error('Error fetching the weather data:', error);
    if (!navigator.onLine) {
        showAlert('You are not connected to the internet.');
    } else {
        showAlert('An error occurred while fetching the weather data. Please try again.');
    }
}

function updateWeatherCard(data) {
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    document.querySelector('.description').textContent = data.weather[0].description;
    document.querySelector('.min-max').innerHTML = `Min: ${Math.round(data.main.temp_min)}&deg;C / Max: ${Math.round(data.main.temp_max)}&deg;C`;
    document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('favicon').href = iconUrl;

    document.getElementById('city-input').value = ''; // Clear input
}

function showAlert(message) {
    alert(message); // You can replace this with a custom alert UI if preferred
}