const { Product, products, deleteProductById } = require("../Model/UserModel");

exports.getIndex = (req, res) => {
   res.render("index", { products });
};

exports.getProducts = (req, res) => {
   res.render("produto", { products });
};

exports.createProduct = (req, res) => {
   const { product_name, preco } = req.body;
   const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
   const newProduct = new Product(newId, product_name, preco);
   products.push(newProduct);
   res.redirect("/produtos");
};

exports.deleteProduct = (req, res) => {
   deleteProductById(req.params.id);
   res.redirect("/produtos");
};

exports.getContato = (req, res) => {
   res.render("contato");
};

exports.getSobre = (req, res) => {
   res.render("sobre");
};