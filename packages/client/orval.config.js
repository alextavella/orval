const { de } = require("@faker-js/faker");
const { http } = require("msw");

module.exports = {
  'appstore': {
    output: {
      mode: 'split',
      target: './src/app/data/appstore.ts',
      schemas: './src/app/data/model',
      httpClient: 'axios',
      client: 'react-query',
      mock: false,
      prettier: true,
      override: {
        mutator: {
          path: './src/app/lib/api.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: '../../api/openapi.yaml',
    },
  },
};