const express = require("express")
const router = express.Router()

const Event = require("../models/event.model")

const { ensureLoggedIn } = require("connect-ensure-login")


router.get("/getAllEvents", (req, res, next) => {
  Event.find()
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.get("/getEvent/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/createEvent", ensureLoggedIn(), (req, res, next) => {
  Event.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/removeEvent/:id", ensureLoggedIn(), (req, res, next) => {
  Event.findByIdAndRemove(req.params.id)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/editEvent/:id", ensureLoggedIn(), (req, res, next) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.get("/getuserevents/:id", (req, res, next) => {
  Event.find({ owner: req.params.id })
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => next(new Error(err)))
})

router.post("/assisttoevents/:id/:userid", ensureLoggedIn(), (req, res, next) => {
  Event.findByIdAndUpdate(req.params.id, { $push: { assistants: req.params.userid } })
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => next(new Error(err)))
})

module.exports = router
