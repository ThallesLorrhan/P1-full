const mongoose = require("mongoose");

async function initMongo() {
  const uri = process.env.MONGODB_URI || "mongodb://mongo:27017/myapp";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected.");
}

module.exports = {
  initMongo,
};
