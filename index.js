const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const {router: clientRoutes} = require('./src/routes/client');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger.json');
const sequelize = require('./src/config/db');

app.use(bodyParser.json());
app.use(cors());

sequelize.sync().then( () => 
    {
        console.log('Data is ok');
    }
);

app.use('/api/', clientRoutes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});