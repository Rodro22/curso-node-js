/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

import DBLocal from "db-local";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./config.js";

const { Schema } = new DBLocal({ path: "./db" });

const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export class UserRepository {
  static async create({ username, password }) {
    // 1. valodaciones de username, podemos usar Zod
    Validation.username(username);
    Validation.password(password);

    // 2. Asegurase que el username no existe
    const user = User.findOne({ username });
    if (user) throw new Error("username already exists");

    const id = crypto.randomUUID(); // MongoDB genera ids, es mejor dejar eso si se usa mongo

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    User.create({
      _id: id,
      username,
      password: hashedPassword,
    }).save();

    return id;
  }

  static async login({ username, password }) {
    Validation.username(username);
    Validation.password(password);

    const user = User.findOne({ username });
    if (!user) throw new Error("username does not valid");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("password is invalid");

    const { password: _, ...publicUser } = user;

    return publicUser;
  }
}

class Validation {
  static username(username) {
    if (typeof username !== "string") {
      throw new Error("username must be a string");
    }
    if (username.length < 3) {
      throw new Error("username must be at least 4 characters long");
    }
  }

  static password(password) {
    if (typeof password !== "string") {
      throw new Error("password must be a string");
    }
    if (password.length < 3) {
      throw new Error("password must be at least 4 characters long");
    }
  }
}
