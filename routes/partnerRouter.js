const express = require('express');
const bodyParser = require('body-parser');
const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all the partners:${req.params.partnerId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on / partners: ${req.params.partnerId}`);
})
.put((req, res) => {
    res.write(`Updating the partners:${req.params.partnerId}`);
     res.end(`Will update the partners: ${req.body.name} with 
     the description ${req.body.name}`);
})
.delete((req, res) => {
    res.end(`Deleting all campsites:${req.params.partnerId}`);
});

module.exports = partnerRouter;