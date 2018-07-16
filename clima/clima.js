const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=20cf1cd52bd8a029167813ebcbcce828`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}