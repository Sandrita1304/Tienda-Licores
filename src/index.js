const server = require("./config/Server");
require('./config/database')

server.listen(server.get('port'))