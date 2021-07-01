const { Type } = require("../entities/entities");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async delete(req, res) {
    const { name } = req.body;
    console.log({ name });
    const type = await Type.destroy({
      where: { name },
    });
    return res.json({ message: "successfully deleted" });
  }
  async getTypes(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
