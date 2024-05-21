const client = require('./db/client');
const { dropTables, createTables } = require('./db/tables');

async function rebuild() {
  try {
    await client.connect();
    await dropTables();
    console.log('dropped tables');
    await createTables();
    console.log('made tables');
  } catch (err) {
    console.log(err.message);
  }
};

rebuild();