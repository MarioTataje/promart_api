const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const {router: clientRoutes} = require("./src/routes/client");


app.use(bodyParser.json());
app.use(cors());
app.use('/api/', clientRoutes);

const PORT = 4040;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});