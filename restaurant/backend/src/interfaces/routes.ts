import express from 'express'
import authService from './../application/auth'
import registerService from './../application/register'
import productsService from './../application/products'

const routes = express.Router()

routes.post('/login', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(401).send('no credentials provided')

  const login = await authService.login(username, password)
  login.token ? res.status(200).send(login) : res.status(401).send({ message: 'invalid login' })
})

routes.post('/register', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(401).send('no credentials provided')

  const register = await registerService.register(username, password)
  register ? res.status(200).send(register) : res.status(401).send({ message: 'user already exists' })
})

routes.get('/products', async (req, res) => {
  const products = await productsService.getProducts()
  products.length > 0 ? res.status(200).send(products) : res.status(401).send('no products registered yet')
})

routes.post('/products/create', async (req, res) => {
  const { name, price, rating, description, category } = req.body
  if (!name || !price || !rating || !category) return res.status(401).send('name, price, rating and category are required')

  const products = await productsService.createProduct(name, price, rating, description, category)
  products ? res.status(200).send(products) : res.status(401).send('something went wrong')
})

routes.put('/products/edit/:id', async (req, res) => {
  const { name, price, rating, description, category } = req.body
  if (!name && !price && !rating && !description && !category) return res.status(401).send('name and price can\'t be empty')

  const id = Number(req.params.id)
  const product = await productsService.editProduct(id, name, price, rating, description, category)
  product ? res.status(200).send(`product with the id ${id} was updated successfully`) : res.status(401).send('product id not found')
})

routes.delete('/products/delete/:id', async (req, res) => {
  const id = Number(req.params.id)
  const deleted = await productsService.deleteProduct(id)
  deleted ? res.status(200).send(`product with the id ${id} was deleted successfully`) : res.status(401).send('product id not found')
})

export default routes
