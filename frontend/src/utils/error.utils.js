const errorUtils = {
  traceError: function (error) {
    console.log('-------- ERROR CAUGHT --------');
    console.log(error);
    console.log('------------------------------');
    console.trace();
  }
};

module.exports = errorUtils;
