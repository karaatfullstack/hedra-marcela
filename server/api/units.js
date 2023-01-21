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

router.get("/:unitId", async (req, res, next) => { // need the :
  try {
    const unit = await Unit.findByPk(req.params.unitId, {
      include: [Property],
    });
    res.json(unit);
  } catch (err) {
    next(err);
  }
});

router.put("/:unitId", async (req, res, next) => { // need the :
  try {
    console.log("try this", req.params.unitId);
    const unit = await Unit.findByPk(req.params.unitId, {
      include: [{ model: Property }],
    });
    if (unit !== null) {
      let updateUnit = await unit.update(req.body);
      res.json(updateUnit);
    } else {
      console.log("try this", req.params.unitId);
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
