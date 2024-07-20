const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const exampleRoutes = require('./routes/exampleRoutes');
const errorHandler = require('./middlewares/errorHandler');
const swaggerDocs = require('./docs/swagger');
const helmet = require("helmet");

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false,
}));

swaggerDocs(app);

app.use('/api/v1/example', exampleRoutes);

app.use(errorHandler);

module.exports = app;