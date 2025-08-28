import mongoose from "mongoose";

export const connectDB = async () => {
  
    await mongoose.connect(
      "mongodb+srv://SowmyaG:Sowmya%4012%2434@cluster0.hjm13s4.mongodb.net/food-del").then(()=>console.log("DB Connected"));
  
}
