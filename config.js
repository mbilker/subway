exports.dev = {
    port: process.env.PORT || 5000,
    client_port: 80,
    mongoose_auth: 'mongodb://subway:subway@alex.mongohq.com:10002/Subway'
}

exports.prod = {
    port: process.env.PORT || 5000,
    client_port: 80,
    mongoose_auth: process.env.MONGOHQ_URL || 'mongodb://subway:subway@alex.mongohq.com:10002/Subway'
}

exports.misc = {
  max_log_size: 32000
}
