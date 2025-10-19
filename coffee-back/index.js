const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')
const { buildSchema } = require('graphql')
var cors = require('cors')

const products = require('./data/products')
const coffees = require('./data/coffee')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    coffees: [Coffee!]!
    coffee(id: ID!): Coffee
  }

  """ 
  User can be the author of a post or comment
  """

  type Coffee {
    id: Int!
    title: String!
    category: String!
    description: String!
    weights: [Weight!]!
    rate: Rate!
    hue: Hue!
    actions: [String!]!
    details: [Detail!]!
    taste: [String!]!
  }

  type Weight {
    value: Int!
    price: Int!
    priceCrossed: Int!
  }

  type Rate {
    rating: Float!
    comments: Int!
  }

  type Hue {
    acidity: Int!
    bitterness: Int!
    richness: Int!
  }

  type Detail {
    kind: String!
    variety: String
    processing: String
    geography: String!
  }
`)

const app = express()

const expressWs = require('express-ws')(app);

// The root provides a resolver function for each API endpoint
const root = {
  coffee: ({id}) => coffees.find(p => p.id == id),
  coffees: () => coffees.map(p => {
    let weights = [];
    let details = [];
    p.weights.forEach(el => weights.push(el));
    p.details.forEach(el => details.push(el));
    p.weights = weights;
    p.details = details;
    return p;
  }),
}

app.use(cors())

app.use('/graphql', createHandler({
  schema: schema,
  rootValue: root
}))

app.get('/ui', (req, res) => {
  res.sendFile(__dirname + '/ui.html')
})

app.ws('/ws', function(ws, req) {
  ws.on('message', function(msg) {
    const data = JSON.parse(msg)
    
    if (data.event === 'getCoffees') {
      ws.send(
        makeEvent('updateCoffees', { coffees : coffees.map(p => p) 
        })
      )
    }
  });
});

const port = 4000

app.listen(port)

console.log(`Server started at ${port} port. Open http://localhost:${port}/ui`)


function broadcast(message) {
  expressWs.getWss().clients.forEach(c => c.send(message))
}

function makeEvent(eventName, data = {}) {
  return JSON.stringify({ event: eventName, data })
}