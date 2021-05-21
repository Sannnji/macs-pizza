import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
});

const User = mongoose.model("user", userSchema);

export default User;