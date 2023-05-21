import cors from "cors";
import express, { Application, NextFunction, Request, Response } from 'express';
import { Schema, model } from "mongoose";

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
    /* 
    1. interface
    2. Schema
    3. Model
    4. Database query on Model 
    */

    //creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        },
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

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

    //create fake data
    const createUserToDb = async () => {
        const user = new User({
            id: '794',
            role: "student",
            password: 'Jhakanaka',
            name: {
                firstName: 'MD',
                middleName: 'Emon',
                lastName: 'Hossain',
            },
            gender: "male",
            email: 'abc@gmail.com',
            contactNo: '01777772',
            emergencyContactNo: "01888883",
            presentAddress: 'BD',
            permanentAddress: 'UK',
        });
        await user.save();
        console.log(user)
    }

    createUserToDb()
})





export default app;