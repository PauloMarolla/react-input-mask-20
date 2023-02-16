/* eslint-disable import/no-unresolved */

if (process.env.NODE_ENV === "production") {
  module.exports = require("./lib/react-input-mask-20.production.min.js");
} else {
  module.exports = require("./lib/react-input-mask-20.development.js");
}
