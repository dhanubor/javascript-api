const apiKey = "YOUR_API_KEY";
const city = "Dhaka";
const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`City: ${data.name}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
  })
  .catch(error => console.error("Error fetching data:", error));
