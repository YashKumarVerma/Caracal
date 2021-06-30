const fs = require("fs");

/**
 * Returns all the entities defined in the application
 * along with the operations.
 */
const listEntityAndOperations = async () => {
  const rawData = await fs.readFileSync("./routes.json.example");
  const data = JSON.parse(rawData);

  const entityList = {};

  /**
   * for each entry in routes.json, find all possible operations
   */
  data.forEach((entry) => {
    if (entry.access !== undefined) {
      if (!Object.keys(entityList).includes(entry.access.entity)) {
        entityList[entry.access.entity] = [];
      }

      entityList[entry.access.entity].push(entry.access.operation);
    }
  });

  console.log(JSON.stringify(entityList));
  return entityList;
};
listEntityAndOperations();
module.exports = { listEntityAndOperations };
