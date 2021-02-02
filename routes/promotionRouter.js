const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all the campsites:${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on / promotion: ${req.params.promotionId}`);
})
.put((req, res) => {
    res.write(`Updating the promotions:${req.params.promotionId}`);
    res.end(`Will update the  /promotions: ${req.body.name} with the description ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting all promotions: ${req.params.promotionId}`);
});

module.exports = promotionRouter;