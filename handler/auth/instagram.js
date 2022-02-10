const configInstagram = require("../../configs/meta");

const instagramUseCase = require("../../useCase/auth/instagram");

const generateShortToken = async (req) => {
  try {
    const { code } = req.body;
    const res = await instagramUseCase.shortToken({
      code,
      clientId: configInstagram.igAppId,
      clientSecret: configInstagram.igAppSecret,
      redirectUri: configInstagram.igAppRedirectUri,
    });
    console.log("error : ", error);
    return res;
  } catch (error) {
    console.log("error : ", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

const generateLongToken = async (req, res) => {
  try {
    const { code } = req.body;
    const res = instagramUseCase.longToken({ code });
    return {
      success: true,
      message: "Success generating long live token",
      data: {},
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: {},
    };
  }
};

module.exports = { generateShortToken, generateLongToken };
