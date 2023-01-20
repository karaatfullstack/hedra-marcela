const router = require("express").Router();
const { Property, Unit } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allProperties = await Property.findAll();
    res.json(allProperties);
  } catch (err) {
    next(err);
  }
});

router.get("/:propertyId", async (req, res, next) => {
  try {
    const property = await Property.findByPk(req.params.propertyId, {
      include: [Unit],
    });
    res.json(property);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProperty = await Property.create(req.body);
    await newProperty.save();
    res.json(newProperty);
  } catch (err) {
    next(err);
  }
});

// router.post("/:propertyId/:unitId", async (req, res, next) => {
//   try {
//     const property = await Property.findByPk(req.params.propertyId, {
//       include: [{ model: Unit }],
//     });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
