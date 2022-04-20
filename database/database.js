const pg = require('pg');
const Promise = require('bluebird');
let db = Promise.promisifyAll(pg);


const client = new db.Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "sean"
})

client.connectAsync();

// // client.query(`INSERT INTO users(name, age, id) VALUES ('sean', 30, 1)`);

client.queryAsync(`Select * from users`)
  .then((res) => {
    console.log(res.rows)
    client.end;
  })
  .catch((err) => {
    console.log(err);
    client.end;
  })
