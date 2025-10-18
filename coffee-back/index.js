const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')
const { buildSchema } = require('graphql')
var cors = require('cors')

const products = require('./data/products')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [String!]!
    "Schema version"
    version: String
  }

  type Mutation {
    addProduct(product: ProductInput!): Product
  }

  """ 
  User can be the author of a post or comment
  """
  type Product {
    id: ID!
    title: String!
    price: Float!
    description: String!
    category: String!
    image: String!
    rating: Rating!
  }

  type Rating {
    rate: Float
    count: Int
  }
  
  input ProductInput {
    title: String!
    price: Float!
    description: String
    category: String!
    image: String
  }
`)

const app = express()

const expressWs = require('express-ws')(app);

// The root provides a resolver function for each API endpoint
const root = {
  product: ({id}) => products.find(p => p.id == id),
  products: () => products.map(p => p),
  version: () => '1.2.3',
  categories: () => products.map(p => p.category).sort().filter((c, ind, arr) => ind === 0 || c !== arr[ind - 1]),

  addProduct({ product }) {
    const newProduct = {
      "id": products.length + 1,
      "title": product.title,
      "price": product.price,
      "description": product.description || 'some words about product...',
      "category": product.category,
      "image": product.image || '[product picture]',
      "rating": { rate: 0.0, count: 0 },
    }

    products.push(newProduct)

    broadcast(makeEvent('addProduct', { newProduct } ))

    return root.product({id: newProduct.id})
  }
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
    
    if (data.event === 'getProducts') {
      ws.send(
        makeEvent('updateProducts', { products : products.map(p => p) 
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