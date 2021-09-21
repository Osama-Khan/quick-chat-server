export default class MessageDTO {
  message: string;
  sender: string;
  time: Date;

  constructor(message: string, sender: string, time: Date) {
    this.message = message;
    this.sender = sender;
    this.time = time;
  }
}
