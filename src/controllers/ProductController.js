const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 5 });

    return res.json(products);
  },

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(400).json({ Error: 'Produdo não localizado' });
    }

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const { id } = req.params;
    // const { title, description, url } = req.body;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // Product.findByIdAndUpdate(id, {title, description, url}, {new: true});

    return res.json(product);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Product.findByIdAndRemove(id);

    return res.json({ OK: 'Registro removido' });
  },
};
