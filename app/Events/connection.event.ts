import { Server, Socket } from "socket.io";
import {
  onSendMessageEvent,
  events,
  onJoinRoomEvent,
  onCreateRoomEvent,
  onLeaveRoomEvent,
} from "./";

/** Event triggered when server receives a connection
 * @param server The server that received the connection
 * @param socket The socket of the connection
 */
export function onConnectEvent(server: Server, socket: Socket) {
  socket.on(events.onSendMessage, (message) =>
    onSendMessageEvent(server, socket, message)
  );
  socket.on(events.onJoinRoom, (id) => {
    onJoinRoomEvent(socket, id);
  });
  socket.on(events.onCreateRoom, () => {
    onCreateRoomEvent(socket);
  });
  socket.on(events.onLeaveRoom, (id) => {
    onLeaveRoomEvent(socket, id);
  });
}
