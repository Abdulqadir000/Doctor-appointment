import mongoose from "mongoose";

export default async function connectDB() {
  let connection;
  if (connection?.connection?.readyState != 1) {
    connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  }
}


// import mongoose from "mongoose";

// let isConnected = false; // Track connection status globally

// export default async function connectDB() {
//   if (isConnected) {
//     // Use existing database connection
//     console.log("Using existing database connection");
//     return;
//   }

//   try {
//     // Establish new connection if not already connected
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true; // Update status to reflect active connection
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw new Error("Database connection failed");
//   }
// }
