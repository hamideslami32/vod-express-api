const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
