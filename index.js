function pathifyjs(path) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(config)
    .reduce(function (str, param) {
      var value = config[param];
      return str.replace(":" + param, value);
    }, path);
}

module.exports = pathifyjs;
