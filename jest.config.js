module.exports = {
  testEnvironment: './jest-environment-jsdom.cjs',
  globals: {
    fetch,
    Headers,
    Request,
    Response,
    FormData,
    Blob
  },
};
