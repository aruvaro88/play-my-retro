const express = require("express")
const router = express.Router()

const Event = require("../models/event.model")

router.get("/getAllEvents", (req, res, next) => {
  Event.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

router.get("/getEvent/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

router.post("/createEvent", (req, res, next) => {
  Event.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

module.exports = router