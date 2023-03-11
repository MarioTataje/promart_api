const client = require('../models/client');

const getClients = async () => {
    const clients = await client.findAll();
    return clients;
}

const createClient = async (data) => {
    const client = await client.create(data);
    return client;
}

const kpiClients = async () => {
    const kpi = await client.findAll();
    return kpi;
}

module.exports = {
    getClients,
    createClient,
    kpiClients
}