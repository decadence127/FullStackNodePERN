const { Brand } = require("../entities/entities");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async delete(req, res) {
    const { name } = req.body;
    console.log({ name });
    const type = await Type.destroy({
      where: { name },
    });
    return res.json({ message: "successfully deleted" });
  }
  async getBrands(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
