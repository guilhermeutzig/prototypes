import productsService from './../domain/services/products'

class Products {
  public async getProducts () {
    return productsService.getAllProducts()
  }

  public async createProduct (name: string, price: number, rating: number, description: string, category: string) {
    return productsService.createProduct(name, price, rating, description, category)
  }

  public async editProduct (id: number, name: string, price: number, rating: number, description: string, category: string) {
    return productsService.editProduct(id, name, price, rating, description, category)
  }

  public async deleteProduct (id: number) {
    return productsService.deleteProduct(id)
  }
}

export default new Products()
