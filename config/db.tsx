import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO MONGO SUCCESS...");
  } catch (error) {
    console.error("CONNECTED TO MONGO FAILED...", error.message);
    process.exit(1);
  }
};

export default dbConnect;
