import jwt from "jsonwebtoken";
const generateTokenandCookies = (userId, res) => {
    const token = jwt.sign({ userId },"sYxjmhAnShXdM1y1+Pe92syln17EfVHz8mVtvKcx3bU=", {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // ms
        httpOnly: true, // prevent XSS attacks
        sameSite: "strict", // CSRF attacks
        secure: false,//process.env.NODE_ENV!=="development",
    });
};

export default generateTokenandCookies;
