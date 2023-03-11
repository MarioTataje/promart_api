const { Client } = require('../models/client');
const Support = require('../supports/client');

const getClients = async () => {
    let clients = await Client.findAll();
    clients = Support.buildClients(clients);
    return clients;
}

const createClient = async (data) => {
    data = Support.buildClientRequest(data);
    const client = await Client.create(data);
    return client;
}

const kpiClients = async () => {
    const clients = await Client.findAll();
    const kpi = Support.buildKpi(clients);
    return kpi;
}

module.exports = {
    getClients,
    createClient,
    kpiClients
}