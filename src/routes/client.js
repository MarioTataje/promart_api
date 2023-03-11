const router = require('express').Router({mergeParams: true});
const { getClients, createClient, kpiClients } = require('../controllers/client');
const { validate } = require('./../config/validate');
const { checkSchema } = require('express-validator');
const { clientSchema } = require('../schemas/client');

router.get('/listclientes', getClients);
router.post('/creacliente', validate(checkSchema(clientSchema)), createClient);
router.get('/kpideclientes', kpiClients);

module.exports = {
    router,
}
