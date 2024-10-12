const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config({
  path: './env'
})


const ConnectDatabase = () => {
  const connectiondb = mongoose
    .connect(
      `mongodb://127.0.0.1:27017/test`
    )
    .then((data) => {
      console
        .log(`databases connected this url ${data.connection.host}`)
    }).catch((err)=>console.log(err));
};
module.exports = ConnectDatabase;
