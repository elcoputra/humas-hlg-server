const axios = require("axios");

const longToken = async ({ body }) => {};

const shortToken = async ({ code, clientId, clientSecret, redirectUri }) => {
  try {
    console.table([clientId, clientSecret, redirectUri, code]);
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
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { longToken, shortToken };
