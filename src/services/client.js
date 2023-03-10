const getClients = async () => {
    return {'message': 'The fit was retrieved'};
}

const createClient = async (data) => {
    console.log(data);
    return {'message': 'The fit was retrieved'};
}

const kpiClients = async (data) => {
    console.log(data);
    return {'message': 'The fit was retrieved'};
}

module.exports = {
    getClients,
    createClient,
    kpiClients
}