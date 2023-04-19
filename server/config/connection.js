const mongoose = require("mongoose");
const uri = process.env.URI;

const connectDb = async () => {
  // try {
  //   await mongoose.connect(
  //     uri,
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     },
  //     () => console.log("Mongo db connected")
  //   );
  // } catch (error) {
  //   console.log(error.message);
  // }

  mongoose.connect(uri)
  .then(() => {
    console.log('Connected to database');
    // Your code here
  })
  .catch((error) => {
    console.log(error.message);
    console.error('Error connecting to database:', error);
  });
};

module.exports = { connectDb };
