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

const users = [
  {
    username: "aru",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_1_q5muet.svg",
    email: "aru@retro.com",
    friends: [],
    platforms: "SNES",
  },
  {
    username: "varo",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_3_bwkity.svg",
    email: "varo@retro.com",
    friends: [],
    platforms: "Arcade",
  },
  {
    username: "almu",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972014/playMyRetro/avataaars_8_zg6tps.svg",
    email: "almu@retro.com",
    friends: [],
    platforms: "Sega Megadrive",
  },
  {
    username: "dena",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972014/playMyRetro/avataaars_9_ddqvda.svg",
    email: "dena@retro.com",
    friends: [],
    platforms: "Sega Saturn",
  },
  {
    username: "fer",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_2_ovnt6n.svg",
    email: "fer@retro.com",
    friends: [],
    platforms: "Arcade",
  },
  {
    username: "nanda",
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_5_mmnt4i.svg",
    email: "nanda@retro.com",
    friends: [],
    platforms: "SNES",
  },
]

const events = [
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Antonio Lopez 149",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/windjammers_raru08.jpg",
    platforms: "Arcade",
    game: "Windjammers",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Paseo de la chopera 14",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/sf2_rgqeuy.jpg",
    platforms: "SNES",
    game: "Street Fighter II",
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Belgica 5",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/kof_h6pssb.jpg",
    platforms: "Sega Megadrive",
    game: "King of Fighters",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Francia 32",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993085/playMyRetro/ikaruga_vskxrg.jpg",
    platforms: "Sega Saturn",
    game: "Ikaruga",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Puerta del Sol 1",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993085/playMyRetro/progear_einykh.png",
    platforms: "Arcade",
    game: "Pro Gear",
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Puerta del Sol 1",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/killer_instinct_nh9ffa.jpg",
    platforms: "SNES",
    game: "Killer Instinct",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Alcala 5",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/streets-of-rage_cldobe.jpg",
    platforms: "Sega Megadrive",
    game: "Streets of Rage",
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Cuchilleros 26",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993085/playMyRetro/daytona-usa_bpqsgn.png",
    platforms: "Sega Saturn",
    game: "Daytona USA",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Avenida España 32",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/snowbros_q7qzs0.png",
    platforms: "Arcade",
    game: "Snow Bros",
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Avenida Pablo Neruda 52",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/Super-pang_r8ldgm.png",
    platforms: "Arcade",
    game: "Super Pang",
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Lago Blanco 5",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993085/playMyRetro/sega-rally_u8orpn.jpg",
    platforms: "Sega Saturn",
    game: "Sega Rally Championship",
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Plaza de Legazpi 4",
    date: "22-05-2020",
    assistants: [],
    photo: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589993086/playMyRetro/tournament_fighters1_ek6zel.jpg",
    platforms: "SNES",
    game: "TNMT: Fighters",
  },
]
const comments = [
  {
    title: "Fistro",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Pecadorl",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "De la pradera",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Al ataquerl!",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Banana",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
  },
  {
    title: "Pupete",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
  },
  {
    title: "Para tu",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
  },
  {
    title: "Papoy",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
  },
  {
    title: "Fistro",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Pecadorl",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Al ataquerl!",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
  },
  {
    title: "Banana",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
  },
]

let userIdArray = []
let eventIdArray = []
let commentIdArray = []

let eventPromise = Event.create(events)
let commentPromise = Comment.create(comments)

User.create(users)
  .then((usersCreated) => usersCreated.forEach((user) => userIdArray.push(user.id)))
  .then(() => Promise.all([eventPromise, commentPromise]))
  .then((promises) => {
    promises[0].forEach((event) => eventIdArray.push(event.id))
    promises[1].forEach((comment) => commentIdArray.push(comment.id))
  })
  .then(() => User.findByIdAndUpdate(userIdArray[0], { friends: [userIdArray[1], userIdArray[5], userIdArray[3]] }, { new: true }))
  .then(() => User.findByIdAndUpdate(userIdArray[1], { friends: [userIdArray[3], userIdArray[2], userIdArray[4]] }, { new: true }))
  .then(() => User.findByIdAndUpdate(userIdArray[2], { friends: [userIdArray[5], userIdArray[4]] }, { new: true }))
  .then(() => User.findByIdAndUpdate(userIdArray[3], { friends: [userIdArray[1], userIdArray[5], userIdArray[4], userIdArray[2]] }, { new: true }))
  .then(() => User.findByIdAndUpdate(userIdArray[4], { friends: [userIdArray[1], userIdArray[2], userIdArray[3]] }, { new: true }))
  .then(() => User.findByIdAndUpdate(userIdArray[5], { friends: [userIdArray[2], userIdArray[1]] }, { new: true }))

  .then(() => Event.findByIdAndUpdate(eventIdArray[0], { owner: userIdArray[0] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[1], { owner: userIdArray[1] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[2], { owner: userIdArray[2] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[3], { owner: userIdArray[3] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[4], { owner: userIdArray[4] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[5], { owner: userIdArray[5] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[6], { owner: userIdArray[0] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[7], { owner: userIdArray[1] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[8], { owner: userIdArray[2] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[9], { owner: userIdArray[3] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[10], { owner: userIdArray[4] }, { new: true }))
  .then(() => Event.findByIdAndUpdate(eventIdArray[11], { owner: userIdArray[5] }, { new: true }))

  .then(() => Comment.findByIdAndUpdate(commentIdArray[0], { createdBy: userIdArray[5], event: eventIdArray[0] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[1], { createdBy: userIdArray[4], event: eventIdArray[1] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[2], { createdBy: userIdArray[3], event: eventIdArray[2] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[3], { createdBy: userIdArray[2], event: eventIdArray[3] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[4], { createdBy: userIdArray[1], event: eventIdArray[4] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[5], { createdBy: userIdArray[0], event: eventIdArray[5] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[6], { createdBy: userIdArray[5], event: eventIdArray[6] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[7], { createdBy: userIdArray[4], event: eventIdArray[7] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[8], { createdBy: userIdArray[3], event: eventIdArray[8] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[9], { createdBy: userIdArray[2], event: eventIdArray[9] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[10], { createdBy: userIdArray[1], event: eventIdArray[10] }, { new: true }))
  .then(() => Comment.findByIdAndUpdate(commentIdArray[11], { createdBy: userIdArray[0], event: eventIdArray[11] }, { new: true }))

  .then(() => mongoose.connection.close())
  .catch((err) => new Error(err))
