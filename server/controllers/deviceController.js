const uuid = require("uuid");
const path = require("path");
const { Device, DeviceDesc } = require("../entities/entities");
class DeviceController {
  async create(req, res) {
    let { name, price, brandId, info, typeId } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpeg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));
    const device = await Device.create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) => {
        DeviceDesc.create({
          title: i.title,
          description: i.description,
          deviceId: device.id,
        });
      });
    }

    return res.json(device);
  }
  async delete(req, res) {
    const { name } = req.body;
    console.log({ name });
    const type = await Type.destroy({
      where: { name },
    });
    return res.json({ message: "successfully deleted" });
  }
  async getAllDevices(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }
  async getDevice(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceDesc, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
