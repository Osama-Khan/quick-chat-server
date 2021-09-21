import { Server, Socket } from "socket.io";
import { events } from "./";
import MessageDTO from "../Models/message.dto";

/** Event triggered when client sends a message
 * @param server The server that received the connection
 * @param socket The socket of the connection
 * @param message The message sent by the client
 */
export function onSendMessageEvent(
  server: Server,
  socket: Socket,
  message: string
) {
  {
    const dto = new MessageDTO(message, socket.id, new Date());
    emitReceiveMessageEvent(server, dto);
  }
}

/** Emits the receive message event
 * @param server The server that the event should be emitted on
 * @param message The message object to be sent with the event
 */
export function emitReceiveMessageEvent(server: Server, dto: MessageDTO) {
  {
    server.emit(events.onReceiveMessage, dto);
  }
}
