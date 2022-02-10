const axios = require("axios");

const longToken = async ({ body }) => {};

const shortToken = async ({ code, clientId, clientSecret, redirectUri }) => {
  try {
    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code: code,
      }
    );

    return res;
  } catch (error) {
    return error;
  }
};

module.exports = { longToken, shortToken };
