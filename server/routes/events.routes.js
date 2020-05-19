const express = require("express")
const router = express.Router()

const Event = require("../models/event.model")
const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect("/login"))

const ensureLogin = require("connect-ensure-login")


router.get("/getAllEvents", (req, res, next) => {
  Event.find()
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching events" }) : null))
})

router.get("/getEvent/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching the event" }) : null))
})

router.post("/createEvent", (req, res, next) => {
  Event.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error creating that event" }) : null))
})

router.post("/removeEvent/:id", (req, res, next) => {
  Event.findByIdAndRemove(req.params.id)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error removing that event" }) : null))
})
router.post("/editEvent/:id", (req, res, next) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .populate("owner")
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error updating the event" }) : null))
})

router.get("/getuserevents/:id", (req, res, next) => {
  Event.find({ owner: req.params.id })
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching user events" }) : null))
})

module.exports = router
