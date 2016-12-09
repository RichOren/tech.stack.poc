import * as mongoose from "mongoose";

interface IUser {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    email: string;
    admin: boolean;
    password: string;
}

interface IUserModel extends IUser, mongoose.Document {
}

let userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    address: String,
    city: String,
    state: String,
    zip: Number,
    country: String,
    email: String,
    admin: Boolean,
    password: {type: String, required: true}
});

const User = mongoose.model<IUserModel>("User", userSchema);
export = User;
