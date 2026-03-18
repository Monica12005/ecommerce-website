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