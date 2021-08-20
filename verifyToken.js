const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  console.log(req.headers);
  console.log(Object.keys(req));
  const headerToken = req.headers.token;
  if (headerToken) {
    const token = headerToken.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (error) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Your not authenticated!");
  }
}

module.exports = verify;
