function updateInfo(data) {
    // console.log(data.location.name);
    // console.log(data.current.temp_c);

    document.querySelector('.city-name').innerHTML = `${data.location.name}`;
    document.querySelector('.temp').innerHTML = `Temperature : ${data.current.temp_c}°C`;
    document.querySelector('.description').innerHTML = `${data.current.condition.text}`;
    document.querySelector('.humidity').innerHTML = `Humidity : ${data.current.humidity}%`;
    document.querySelector('.humidity').innerHTML = `Humidity : ${data.current.humidity}%`;
    document.querySelector('.wind').innerHTML = `Wind Speed: ${data.current.wind_kph} km/h`;
    
}

document.querySelector("button").addEventListener('click', (event)=>{
    const city = document.getElementById("city-input").value;
    if(city === "") {
        alert("Please Enter a City Name");
    }
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=16065719d12b46b4b9431605252204&q=${city}&aqi=yes`);
    promise.then((response) => {
        return response.json();
    }).then((data) => {
        updateInfo(data);
    })
}) 