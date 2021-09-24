import { Server, Socket } from "socket.io";
import { UserType } from "../Models/user.model";
import { events, onLoginEvent } from "./";
import { onRegisterEvent } from "./auth.event";

/** Event triggered when server receives a connection
 * @param server The server that received the connection
 * @param socket The socket of the connection
 */
export function onConnectEvent(server: Server, socket: Socket) {
  socket.on(events.onLogin, (user: Omit<UserType, "_id">) =>
    onLoginEvent(socket, user)
  );
  socket.on(events.onRegister, (user: Omit<UserType, "_id">) =>
    onRegisterEvent(socket, user)
  );
}
