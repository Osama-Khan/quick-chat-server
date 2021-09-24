import { UserType } from "./user.model";

export default class MessageDTO {
  message: string;
  sender: Partial<UserType>;
  time: Date;

  constructor(message: string, sender: Partial<UserType>, time: Date) {
    this.message = message;
    this.sender = sender;
    this.time = time;
  }
}
