var restify = require('restify');
var _ = require('lodash');

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(restify.pre.sanitizePath());

['products', 'items', 'sections', 'header'].forEach((item) => {
    const data = require(`./entities/${item}.json`);
    server.get(`/api/${item}`, (req, res, next) => {
        res.send(200, data);
        return next();
    })
})

const collections = require('./entities/collections.json')
server.get('/api/collections', (req, res, next) => {
    if (req.query.priceLow && req.query.priceHigh && req.query.time) {
        if (req.query.time === 'all') {
            res.send(200, _.filter(collections, (c) => c.price >= req.query.priceLow && c.price <= req.query.priceHigh))
        } else {
            res.send(200, _.filter(collections, (c) => c.price >= req.query.priceLow && c.price <= req.query.priceHigh && c.time === req.query.time))
        }
    } else {
        res.send(200, collections);
    }

    return next();
})

server.get('/api/collections/:id', (req, res, next) => {
    const c = _.find(collections, (c) => c.id == req.params.id)
    res.send(200, c);
    return next();
})

server.listen(8000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
