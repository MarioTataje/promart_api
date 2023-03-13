const Util = require('./util');

const buildClients = (clients) => {
    const mappedClients = clients.map(client => {
        const fecha_probable_muerte = Util.getProbablyDeathDate(client.fecha_nacimiento);
        client.dataValues.fecha_probable_muerte = fecha_probable_muerte;
        return client;
    });
    return mappedClients;
}

const buildClientRequest = (client) => {
    client.fecha_nacimiento = Util.formatDate(client.fecha_nacimiento);
    client.edad = Number(client.edad);
    return client;
}

const buildKpi = (clients) => {
    const ages = Util.getAges(clients);
    const mean = Util.calculateMean(ages);
    const standardDeviation = Util.calculateStandardDeviation(ages);

    return {
        'promedio_edad': mean,
        'desviacion_estandar': standardDeviation
    };
}

module.exports = {
    buildClients,
    buildClientRequest,
    buildKpi
}