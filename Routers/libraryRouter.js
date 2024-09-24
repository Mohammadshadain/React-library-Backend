const Model = require('../Models/libraryModel');
const express = require('express');
const router = express.Router();
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);


        });


});
router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city);
    Model.findOne({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            logger.error(err);
            res.status(500).json(err);

        });

});
router.get('/getemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            log.error(err);
            res.status(500).json(err);

        });

});
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            log.error(err);
            res.status(500).json(err);

        });
});
router.delete('/deletebyid/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            log.error(err);
            res.status(500).json(err);

        });
});
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            log.error(err);
            res.status(500).json(err);

        });

})
router.put('/updateid/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            log.error(err);
            res.status(500).json(err);

        });
})

module.exports = router;