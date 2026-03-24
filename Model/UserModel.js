class Product {
   constructor(id, product_name, preco) {
      this.id = id;
      this.product_name = product_name;
      this.preco = preco;
   }
}

const products = [];

const findProductById = (id) => products.find(p => p.id === parseInt(id));
const deleteProductById = (id) => {
   const index = products.findIndex(p => p.id === parseInt(id));
   if (index > -1) products.splice(index, 1);
   return index > -1;
};

module.exports = { Product, products, findProductById, deleteProductById };