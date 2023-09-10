const apiKey = 'c391d9ffd9ccdd5e5734fc5e859efc03';
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const fetchAPI = async (city) => {
    try {
        let response = await fetch(apiURL + `${city}&appid=${apiKey}`);
        let data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".wind").textContent = data.wind.speed;
        document.querySelector(".cloud").textContent = data.weather[0].description;
    }catch(error){
        console.log(`There was an error`);
    }
}

const sButton = document.querySelector(".search-icon");
sButton.addEventListener('click', ()=>{
    const searchBar = document.querySelector(".search-input")
    const searchBarr = searchBar.value.trim();

    if (searchBarr !== ""){
        fetchAPI(searchBarr)
    }else{
        alert('Input a city')
    }
})
