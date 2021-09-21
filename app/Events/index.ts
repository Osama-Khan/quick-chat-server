import { onConnectEvent } from "./Connection.event";
import { onSendMessageEvent, emitReceiveMessageEvent } from "./message.event";

export { onConnectEvent, onSendMessageEvent, emitReceiveMessageEvent };
/** An object containing the possible events and their string names */
export const events = {
  onConnect: "connection",
  onSendMessage: "sendMessage",
  onReceiveMessage: "receiveMessage",
};
