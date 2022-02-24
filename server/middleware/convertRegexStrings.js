/*
  This is an intermediate request step that converts a 
  regex string found in a query string value to a regExp
  object bc regular expressions in string format are not
  treated as such when they go through a query. To keep
  the demo simple, only regular expressions involved in 
  prefix searches (aka carats, "^") are considered
*/

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
