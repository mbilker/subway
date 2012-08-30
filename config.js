exports.dev = {
    port: 3000,
    client_port: 3000,
    //mongoose_auth: 'mongodb://mongodb@localhost/subway'
    mongoose_auth: 'mongodb://subway:subway@alex.mongohq.com:10002/Subway'
}

exports.prod = {
    //port: 14858, // Nodester port
    port: process.env.PORT || 5000,
    client_port: 80, // Websockets talk on port 80 on Nodester, regardless of listen port
    //mongoose_auth: 'mongodb://mongodb@localhost/subway'
    mongoose_auth: 'mongodb://subway:subway@alex.mongohq.com:10002/Subway'
}

exports.misc = {
  max_log_size: 32000
}
