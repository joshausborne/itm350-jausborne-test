/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

/* module.exports = config; */

module.exports = {
    coverageThreshold: {
      './src/*.js': {
        lines: 80,
      },
    },
  };
