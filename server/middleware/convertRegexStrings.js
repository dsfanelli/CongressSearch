const convertRegexStrings = (req, res, next) => {
  const queryString = req.query;
  Object.keys(queryString).forEach((paramName) => {
    if (queryString[paramName].startsWith("^")) {
      queryString[paramName] = new RegExp(queryString[paramName], "i");
    }
  });
  next();
};
module.exports = { convertRegexStrings };
