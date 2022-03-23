const { User } = require('../models/user');
const express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.find().sort('firstname')
        if (!user) res.status(401).send("There is no record Found");
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) res.status(401).send("User Not Exist with this Id");
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
})

router.post('/', async (req, res) => {
    try {
        let user = await User.find({
            $or: [{ firstname: req.body.firstname }]
        });
        if (user.length > 0) {
            res.status(200).send("User Already Exists");
        } else {
            user = new User({ firstname: req.body.firstname, lastname: req.body.lastname });
            user = await user.save();
            res.send(user);
        }
    } catch (err) {
        res.send(err.message);
    }
})

router.put('/:id', async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, { firstname: req.body.firstname, lastname: req.body.lastname }, { new: true });
        if (!user) res.status(401).send("User Not Found With The Given Id");
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let user = await User.findByIdAndRemove(req.params.id);
        if (!user) res.status(401).send("User Not Exist With This Id");
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
})

router.post('/many', async (req, res) => {
    try {
        let user = await User.insertMany(req.body.users);
        if (user.length <= 0) res.status(401).send("Users are not inserted");
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = router;