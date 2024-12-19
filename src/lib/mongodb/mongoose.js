import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Scholly-blog",
      useNewUrParser: true,
      useUnifiedTopology: true,
    });
    initialized = true;
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};
