const ClientService = require("../services/client");

const getClients = async (req, res) => {
    try {
        const message = await ClientService.getClients();
        return res.status(201).send(message);
    } catch (err) {
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

const createClient = async (req, res) => {
    const client = req.body;
    try {
        const message = await ClientService.createClient(client);
        return res.status(201).send(message);
    } catch (err) {
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

const kpiClients = async (req, res) => {
    try {
        const message = await ClientService.getClients();
        return res.status(201).send(message);
    } catch (err) {
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

module.exports = {
    getClients,
    createClient,
    kpiClients
}