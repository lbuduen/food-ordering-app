import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true })

userSchema.pre("save", async function (next) {
  const user = this;
  try {
    if (user.isModified("password") || user.isNew) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;
  try {
    return await bcrypt.compare(password, user.password);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const User = models?.User || model("User", userSchema)