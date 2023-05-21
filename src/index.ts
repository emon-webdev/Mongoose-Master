
import mongoose from 'mongoose';
import app from './app';

const port: Number = 5000

//database connetion
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection successfully`)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    } catch (err) {
        console.log("Fail to connect database", err)
    }
}
bootstrap()


