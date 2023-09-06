const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  // console.log("cookie token", token);

  // if (token) {
  //   console.log('returned token',token)
  //   return token;
    
  // }
  
  let token;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  console.log("token", token);
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWUzOGVhOGFlODA4ZTk4ZGE4MzI2ZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5Mzk2NjczMX0.NlpMau5vSoX3_zWeWrePzReYaS9di2I19oP7jU48KHQ";
  return token;
};
