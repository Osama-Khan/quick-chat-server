import { connect, Mongoose } from "mongoose";

class DBService {
  /** Connects to the database */
  initConnection() {
    connect("mongodb://localhost:27017/chat");
  }
}

export default new DBService();
