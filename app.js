const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInformacion = async(direccion) => {
    try {
        let resp = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(resp.lat, resp.lng);

        return `La temperatura de ${ resp.direccion } es ${ temp } °C`;
    } catch (error) {
        return `No se pudo determinar el clima para ${direccion}`
    }

}

getInformacion(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));