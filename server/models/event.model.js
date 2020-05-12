const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema(
  {
    title: String,
    description: String,
    address: String,
    date: String,
    platforms: [{ type: String, enum: ["SNES", "Sega Megadrive", "Sega Saturn", "Arcade"] }],
    game: String,
    photo: String,
    assistants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
