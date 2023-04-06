const { SessionModel } = require("../db");
const crypto = require("crypto");

const SESSION_EXPIRY = 7; //days

module.exports = {
  generatedSessionToken: async (user) => {
    const token = crypto.randomBytes(32).toString("hex");
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + SESSION_EXPIRY);
    const session = await SessionModel.create({
      user: user._id,
      token,
      expiryDate,
    });
    return session;
  },
};
