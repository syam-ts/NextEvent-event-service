import { connect } from "mongoose";
import dotenv from "dotenv";

class ConnectDB {
    private _mongo_uri: string;

    constructor() {
        dotenv.config({}),
            (this._mongo_uri =
                (process.env.MONGO_URI as string) ||
                "mongodb+srv://syamnandhu3:sovOVXaD9YvakDAo@event.wqxteeh.mongodb.net/?retryWrites=true&w=majority&appName=event");
    }

    public async connect(): Promise<void> {
        try {
            await connect(this._mongo_uri);
        } catch (error) {
            console.log("DB ERROR: ", error);
        }
    }
}

export default ConnectDB;
