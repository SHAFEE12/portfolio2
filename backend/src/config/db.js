// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);

//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     console.log("MONGODB_URI =", process.env.MONGODB_URI);

//     const conn = await mongoose.connect(process.env.MONGODB_URI);

//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;







import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("URI:", process.env.MONGODB_URI);

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;