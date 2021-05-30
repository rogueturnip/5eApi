# 5eAPI

This is an express REST API and GraphQL server to serve up data stored in a mongodb (https://github.com/rogueturnip/5eImport) for the 5e.tools JSON structure.

Currently there is limited Parsing of the data but with a query parameter of "raw=true" the full JSON can be returned.

## Setup

Add a folder and file as the following
src/environment/development.env
src/environment/production.env

```
APOLLO_INTROSPECTION=true
APOLLO_PLAYGROUND=true
APOLLO_MOCKS=true
APOLLO_MOCK_SCHEMA=false
MONGODB=mongodb+srv://user:passrod@localhost/<dbname>?retryWrites=true&w=majority
PORT=9002
```

## ToDo

- GraphQL completion
- Complete Models
- Complete conversion to TypeGoose
- Expand Models with better typing

### Thanks to the team at 5e.tools for a great data set to work with!
