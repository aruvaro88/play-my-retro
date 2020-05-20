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
    username: aru,
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_1_q5muet.svg",
    email: "aru@retro.com",
    friends: [],
    platforms: "SNES",
  },
  {
    username: varo,
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_3_bwkity.svg",
    email: "varo@retro.com",
    friends: [],
    platforms: "Arcade",
  },
  {
    username: almu,
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972014/playMyRetro/avataaars_8_zg6tps.svg",
    email: "almu@retro.com",
    friends: [],
    platforms: "Sega Megadrive",
  },
  {
    username: dena,
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972014/playMyRetro/avataaars_9_ddqvda.svg",
    email: "dena@retro.com",
    friends: [],
    platforms: "Sega Saturn",
  },
  {
    username: fer,
    password: bcrypt.hashSync("admin", salt),
    avatar: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1589972012/playMyRetro/avataaars_2_ovnt6n.svg",
    email: "fer@retro.com",
    friends: [],
    platforms: "Arcade",
  },
  {
    username: nanda,
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
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Arcade",
    game: "Windjammers",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Paseo de la chopera 14",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "SNES",
    game: "Street Fighter II",
    owner: [],
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Belgica 5",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Sega Megadrive",
    game: "King of Fighters",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Francia 32",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Sega Saturn",
    game: "Ikaruga",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Puerta del Sol 1",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Arcade",
    game: "Pro Gear",
    owner: [],
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Puerta del Sol 1",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "SNES",
    game: "Killer Instinct",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Alcala 5",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Sega Megadrive",
    game: "Streets of Rage",
    owner: [],
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Cuchilleros 26",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Sega Saturn",
    game: "Daytona USA",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Avenida España 32",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Arcade",
    game: "Snow Bros",
    owner: [],
  },
  {
    title: "Casual Play",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Avenida Pablo Neruda 52",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Arcade",
    game: "Super Pang",
    owner: [],
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Calle Lago Blanco 5",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "Sega Saturn",
    game: "Sega Rally Championship",
    owner: [],
  },
  {
    title: "Tournament",
    description:
      "Lorem fistrum ese hombree qué dise usteer ese que llega ese hombree pupita está la cosa muy malar. Caballo blanco caballo negroorl torpedo a peich torpedo hasta luego Lucas condemor quietooor. Mamaar a peich benemeritaar a wan no te digo trigo por no llamarte Rodrigor se calle ustée.",
    address: "Plaza de Legazpi 4",
    date: "22/05/2020",
    assistants: [],
    photo: faker.random.image(),
    platforms: "SNES",
    game: "TNMT: Fighters",
    owner: [],
  },
]
const comments = [
  {
    title: "Fistro",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
    createdBy: "",
    event: "",
  },
  {
    title: "Pecadorl",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
    createdBy: "",
    event: "",
  },
  {
    title: "De la pradera",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
    createdBy: "",
    event: "",
  },
  {
    title: "Al ataquerl!",
    description:
      "Se calle ustée sexuarl te va a hasé pupitaa pecador. Al ataquerl fistro por la gloria de mi madre quietooor mamaar ese hombree te voy a borrar el cerito tiene musho peligro.",
    createdBy: "",
    event: "",
  },
  {
    title: "Banana",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
    createdBy: "",
    event: "",
  },
  {
    title: "Pupete",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
    createdBy: "",
    event: "",
  },
  {
    title: "Para tu",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
    createdBy: "",
    event: "",
  },
  {
    title: "Papoy",
    description: "Minions ipsum poopayee tank yuuu! Jeje bee do bee do bee do ti aamoo! Belloo! Po kass.",
    createdBy: "",
    event: "",
  },
]

let userIdArray = []
let eventIdArray = []
let commentIdArray = []

let eventPromise = Event.create(events)
let commentPromise = Comment.create(comments)
