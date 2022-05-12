// const mongoose = require("mongoose");
// const DB = `mongodb+srv://vasantaKantreddi:qaO6EBWyQ4gSIHfm@cluster0.npebh.mongodb.net/practice?retryWrites=true&w=majority`;
// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((err) => console.log("not coonected", err));

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

