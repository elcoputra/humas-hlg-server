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
    return res;
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const generateLongToken = async (req, res) => {
  try {
    const { code } = req.body;
    const res = instagramUseCase.longToken({ code });
    res.code(201).send({
      success: true,
      message: "Success generating long live token",
      data: {},
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
      data: {},
    });
  }
};
