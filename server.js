const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 4000

// connect Database
mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DataBase Connection Successful");
    app.listen(port, () => {
      console.log("app listening at: " + port);
    });
  })
  .catch(err => console.log(`MongoDb Connection Error: ${err}`));

