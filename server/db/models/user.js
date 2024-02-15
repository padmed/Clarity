const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    required: true,
  },
  freeTrial: {
    access: {
      type: Boolean,
      default: true,
      required: true,
    },
    tokens: {
      type: Number,
      default: 0,
      required: true,
    },
  },
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

uniqueValidator.defaults.message = "already exists";

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);
module.exports = User;
