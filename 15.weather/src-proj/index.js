const form = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const city = form.city.value.trim();
    if(!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '3dd662967ab75fd495316355a4599eee';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(response.ok) {
            console.log(data);
            displayWeather(data);
        } else {
            displayError(data.message);
        }
    } catch(error) {
        displayError('Failed to fetch weather data.');
    }
});

function displayWeather(data) {
    weatherInfo.innerHTML = `
        <div class="text-center col-span-2 border rounded-md p-4 bg-[#2e2e2e] hover:bg-[#424242] transition-colors duration-300 ease-in-out">
            <span class="text-white font-medium">
                ${data.name}, ${data.sys.country}
            </span>
            <div class="text-white font-medium">
                ${new Date(data.dt * 1000).toLocaleDateString()}
            </div>
        </div>
        <div class="border rounded-md p-4 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-thermometer-half text-red-500">
                </i>
                Temperature:
            </span>
            <span class="text-gray-800 font-medium">
                ${data.main.temp}°C
            </span>
        </div>
        <div class="border rounded-md p-4 bg-blue-200 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-cloud-sun text-blue-500"></i>
                Weather:
            </span>
            <span class="text-gray-800 font-medium">    
                ${data.weather[0].description}
            </span>
        </div>
        <div class="border rounded-md p-4 bg-green-200 hover:bg-green-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-tint text-green-500"></i>
                    Humidity:
            </span>
            <span class="text-gray-800 font-medium">
                ${data.main.humidity}%
            </span>
        </div>
        <div class="border rounded-md p-4 bg-purple-200 hover:bg-purple-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-wind text-yellow-500"></i>
                Wind Speed:
            </span>
            <span class="text-gray-800 font-medium">
                ${data.wind.speed} km/h
            </span>
        </div>
        <div class="border rounded-md p-4 bg-red-200 hover:bg-red-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-eye text-indigo-500"></i>
                    Visibility:
            </span>
            <span class="text-gray-800 font-medium">
                ${data.visibility / 1000} km
            </span>
        </div>
        <div class="border rounded-md p-4 bg-pink-200 hover:bg-pink-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-tachometer-alt text-yellow-400"></i>
                Pressure:
            </span>
            <span class="text-gray-800 font-medium">
                ${data.main.pressure} hPa
            </span>
        </div>
        <div class="border rounded-md p-4 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-sun text-yellow-500"></i>
                Sunrise:
            </span>
            <span class="text-gray-800 font-medium">
                ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </span>
        </div>
        <div class="border rounded-md p-4 bg-gray-300 hover:bg-gray-400 transition-colors duration-300 ease-in-out">
            <span class="text-gray-900">
                <i class="fas fa-moon text-yellow-400"></i> 
                Sunset:
            </span>
            <span class="text-gray-800 font-medium">
                ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </span>
        </div>
    `;
}

function displayError(message) {
    weatherInfo.innerHTML = `<div class="text-red-500">${message}</div>`;
}