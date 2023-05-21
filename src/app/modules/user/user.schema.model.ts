import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

//creating schema using interface
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true
        },
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", 'female']
    },
    email?: {
        type: String,
    },
    contactNo: {
        type: String,
    },
    emergencyContactNo: {
        type: String,
    },
    presentAddress: {
        type: String,
    },
    permanentAddress: {
        type: String
    }
});
//modal
 const User = model<IUser>('User', userSchema)
