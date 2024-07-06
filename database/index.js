import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect('mongodb+srv://sourabhojha12:Saur9210@@cluster0.ej0hfdh.mongodb.net/dvd-database&retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database connected successfully...");
    })
    .catch((error) => {
        console.log("not connected to databse",error);
    });
}
