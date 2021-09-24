import { Socket } from "socket.io";
import { events } from "./";
import MessageDTO from "../Models/message.dto";
import { UserType } from "../Models/user.model";

/** Event triggered when client sends a message
 * @param socket The socket of the connection
 * @param message The message sent by the client
 * @param roomId ID of the room the message is sent to
 * @param user The user that sent the message
 */
export function onSendMessageEvent(
  socket: Socket,
  message: string,
  roomId: string,
  user: Partial<UserType>
) {
  const dto = new MessageDTO(message, user, new Date());
  emitReceiveMessageEvent(socket, dto, roomId);
}

/** Emits the receive message event
 * @param socket The socket that the event should be emitted on
 * @param message The message object to be sent with the event
 * @param roomId ID of the room the message is sent to
 */
export function emitReceiveMessageEvent(
  socket: Socket,
  dto: MessageDTO,
  roomId: string
) {
  socket.to(roomId).emit(events.onReceiveMessage, dto);
}
