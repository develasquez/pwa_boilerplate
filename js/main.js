$(function () {
  require.config({
    baseUrl: "./js",
    paths: {
    }
  });
  requirejs(["controllers"], function (controllers) {
    var mySelf = {
      init: function () {
      }
    };
    mySelf.init()
  });
});