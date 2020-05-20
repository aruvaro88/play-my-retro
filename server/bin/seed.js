require("dotenv").config()

const mongoose = require("mongoose")
const faker = require("faker/locale/es")
const User = require("../models/user.model")
const Comment = require("../models/comment.model")
const Event = require("../models/event.model")
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

mongoose.connect(process.env.REMOTEDB, { useNewUrlParser: true, useUnifiedTopology: true })
User.collection.drop()
Event.collection.drop()
Comment.collection.drop()

let eventsArray = []
const makeEvent = (ownerId) => {
  eventsArray.push({
    title: faker.random.word(),
    description: faker.lorem.paragraph(),
    address: faker.address.streetAddress(),
    date: "10/10/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: faker.random.arrayElement(["SNES", "Sega Megadrive", "Sega Saturn", "Arcade"]),
    game: "Street Fighter II",
    owner: ownerId,
  })
}

let commentsArray = []
const makeComment = (ownerId, eventId) => {
  commentsArray.push({
    title: faker.random.word(),
    description: faker.lorem.paragraph(),
    createdBy: ownerId,
    event: eventId,
  })
}

let usersArray = []

for (let i = 1; i <= 10; i++) {
  usersArray.push({
    username: faker.name.firstName(),
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589969335/playMyRetro/djvstock190103456_cyhn9c.jpg",
    email: faker.internet.email(),
    platforms: faker.random.arrayElement(["SNES", "Sega Megadrive", "Sega Saturn", "Arcade"]),
  })
}

User.create(usersArray)
  .then((allUsers) => {
    usersArray = allUsers
    let promises = []
    allUsers.forEach((user) => {
      makeEvent(user.id)
      promises.push(User.findByIdAndUpdate(user.id, { $push: { friends: [usersArray[3].id] } }, { new: true }))
    })
    return Promise.all(promises)
  })
  .then(() => Event.create(eventsArray))
  .then((allEvents) => {
    allEvents.forEach((event) => makeComment(event.owner, event.id))
    return Comment.create(commentsArray)
  })
  .then(() => mongoose.connection.close())
  .then(() => console.log(`DATABASE created`))
  .catch((err) => console.log(`Error while creating users: ${err}`))
