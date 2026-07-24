import mongoose from "mongoose";
import dns from "dns"; // ADD THIS

dns.setServers(["8.8.8.8", "8.8.4.4"]); // ADD THIS

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
  } catch (error) {
    console.error("❌ MongoDB Connection Error");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;