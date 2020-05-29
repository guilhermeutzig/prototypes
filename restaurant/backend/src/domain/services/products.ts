import Product from '../../infrastructure/database/models/product'

class ProductsService {
  public async getAllProducts() {
    const products = await <any>Product.findAll()
    return products
  }

  public async createProduct(name: string, price: number, rating: number, description: string, category: string) {
    console.log(rating)
    const productExists = await Product.findOne({ where: { name } })
    if (!productExists) {
      const model = await Product.create({ name, price, rating, description, category })
      if (model) return model
      return null
    }
    return null
  }

  public async editProduct(id: number, name: string, price: number, rating: number, description: string, category: string) {
    const update = <Product>{}
    if (name) update.name = name
    if (price) update.price = price
    if (rating) update.rating = rating
    if (description) update.description = description
    if (category) update.category = category

    const model = await Product.update({ ...update }, { where: { id } })
    if (model) return model
    return null
  }

  public async deleteProduct(id: number) {
    const model = await Product.destroy({ where: { id } })
    if (model) return model
    return null
  }
}

export default new ProductsService()
