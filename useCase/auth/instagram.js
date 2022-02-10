const axios = require("axios");
const FormData = require("form-data");

const longToken = async ({ body }) => {};

const shortToken = async ({ code, clientId, clientSecret, redirectUri }) => {
  try {
    console.table([clientId, clientSecret, redirectUri, code]);

    const form = new FormData();
    form.append("client_id", clientId);
    form.append("client_secret", clientSecret);
    form.append("grant_type", "authorization_code");
    form.append("redirect_uri", redirectUri);
    form.append("code", code);

    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      form,
      { headers: form.getHeaders() }
    );
    return res;
  } catch (error) {
    console.log("error : ", error)
    return error;
  }
};

module.exports = { longToken, shortToken };
