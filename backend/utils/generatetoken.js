import jwt from "jsonwebtoken";
const generateTokenandCookies = (userId, res) => {
    const token = jwt.sign({ userId },"sYxjmhAnShXdM1y1+Pe92syln17EfVHz8mVtvKcx3bU=", {
        expiresIn: '15d'
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: false,
    });
};

export default generateTokenandCookies;
