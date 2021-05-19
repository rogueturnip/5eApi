export const apollo = {
  introspection: process.env.APOLLO_INTROSPECTION === 'true' ? true : false,
  playground: process.env.APOLLO_PLAYGROUND === 'true' ? true : false,
  mocks: process.env.APOLLO_MOCKS === 'true' ? true : false,
  mockSchema: process.env.APOLLO_MOCK_SCHEMA === 'true' ? true : false,
};
