import { Socket } from "socket.io";
import { events } from "./";

/** Event triggered when client attempts to join a room
 * @param server The server that received the request
 * @param socket Socket of the connection with client
 * @param id The id of the room to be joined
 */
export function onJoinRoomEvent(socket: Socket, id: string) {
  {
    emitJoinedRoomEvent(socket, id);
  }
}

/**
 * Triggers joined room event on the socket. Indicates successful room join.
 * @param socket Socket of the connection with client
 * @param id ID of the room joined
 */
export function emitJoinedRoomEvent(socket: Socket, id: string) {
  socket.join(id);
  socket.emit(events.onJoinedRoom, id);
}

/**
 * Event triggered when client attempts to create a room
 * @param socket Socket of the connection with client
 */
export function onCreateRoomEvent(socket: Socket) {
  emitJoinedRoomEvent(socket, "R-" + socket.id);
}

/**
 * Event triggered when client attempts to leave a room
 * @param socket Socket of the connection with client
 * @param id ID of the room left
 */
export function onLeaveRoomEvent(socket: Socket, id: string) {
  emitLeftRoomEvent(socket, id);
}

/**
 * Triggers left room event on the socket. Indicates successful room leave.
 * @param socket Socket of the connection with client
 */
export function emitLeftRoomEvent(socket: Socket, id: string) {
  socket.leave(id);
  socket.emit(events.onLeftRoom, id);
}
