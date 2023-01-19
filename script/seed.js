"use strict";

const { db } = require("../server/db");
const data = require("./data");
const User = require("../server/db/models/User");
const Property = require("../server/db/models/Property");
const Unit = require("../server/db/models/Unit");
const Task = require("../server/db/models/Task");

const properties = [
  {
    name: "Adelphi",
    address: "206 21st Street, Brooklyn, NY 11232",
    imageUrl: "https://p.rdcpix.com/v02/l4a0da442-m0od-w480_h480_q80.jpg",
    yearBuilt: 2010,
    totalUnits: 8,
    description: "4 Story Condo Building, with 8 units.",
  },
];

const units = [
  {
    name: "A",
    unitType: "2 Bedroom, 1 bath, duplex",
  },
  {
    name: "B",
    unitType: "2 Bedroom, 1 bath, duplex",
  },
  {
    name: "C",
    unitType: "2 Bedroom, 1 bath",
    occupancy: "VACANT",
  },
  {
    name: "D",
    unitType: "2 Bedroom, 1 bath",
  },
];

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "marcela", password: "0418" }),
    User.create({ username: "facundo", password: "0516" }),
  ]);

  const propertyList = await Promise.all(
    properties.map((property) => {
      return Property.create(property);
    })
  );
  const [Adelphi] = propertyList;

  const unitList = await Promise.all(
    units.map((unit) => {
      return Unit.create(unit);
    })
  );

  const [A, B, C, D] = unitList;

  await A.setProperty(Adelphi);
  await B.setProperty(Adelphi);
  await C.setProperty(Adelphi);
  await D.setProperty(Adelphi);

  for (let i = 0; i < data.length; i++) {
    const task = data[i];
    await Promise.all([
      Task.create({
        name: task.name,
        description: task.description,
      }),
    ]);
  }

  console.log(`seeded ${users.length} users`);
  //console.log(`seeded ${properties.length} users`);
  //console.log(`seeded ${units.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      marcela: users[0],
      facundo: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
