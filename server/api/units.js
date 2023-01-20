const router = require("express").Router();
const { Property, Unit } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allUnits = await Unit.findAll();
    res.json(allUnits);
  } catch (err) {
    next(err);
  }
});

router.get("/unitId", async (req, res, next) => {
  try {
    const unit = await Unit.findByPk(req.params.unitId, {
      include: [Property],
    });
    res.json(unit);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
