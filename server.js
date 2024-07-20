const app = require('./src/app.js');
const config = require('./src/config/config.js');
const logger = require('./src/utils/logger.js');

app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
});