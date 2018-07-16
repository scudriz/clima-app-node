const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion); // coloca la dirección en formato url amigable

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);

    }

    let location = resp.data.results[0];
    let latitud = location.geometry.location.lat;
    let longitud = location.geometry.location.lng;
    let nombre = location.formatted_address;


    return {
        direccion: nombre,
        lat: latitud,
        lng: longitud
    }

}

module.exports = {
    getLugarLatLng
}