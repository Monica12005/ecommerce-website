// import mongoose from "mongoose";

// export const connectDB = async () => {
//    mongoose.connection.on ('connected',()=>{
//     console.log("DB connected")
//    })

//    await mongoose .connect (`${process.env.MONGODB_URL}/e-commerce`)
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    console.error("MONGODB_URL missing in environment variables!");
    return;
  }
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;