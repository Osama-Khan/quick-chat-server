import { Server, Socket } from "socket.io";
import { onSendMessageEvent, events } from "./";

/** Event triggered when server receives a connection
 * @param server The server that received the connection
 * @param socket The socket of the connection
 */
export function onConnectEvent(server: Server, socket: Socket) {
  socket.on(events.onSendMessage, (message) =>
    onSendMessageEvent(server, socket, message)
  );
}
