import { Socket } from "socket.io";
import { UserType } from "../Models/user.model";
import { userService } from "../services";
import {
  onSendMessageEvent,
  events,
  onJoinRoomEvent,
  onCreateRoomEvent,
  onLeaveRoomEvent,
} from "./";

/** Event triggered when server receives login request
 * @param socket The socket of the connection
 * @param user Object containing Username and Password of the user
 */
export function onLoginEvent(socket: Socket, user: Partial<UserType>) {
  userService
    .findOne({ name: user.name })
    .then((u) => {
      if (!u) {
        emitLoginFailedEvent(socket, "No such login!");
        return;
      }
      if (u.password !== user.password) {
        emitLoginFailedEvent(socket, "Incorrect password!");
        return;
      }
      emitLoginSuccessEvent(socket, u);
      socket.on(events.onSendMessage, (message, roomId) => {
        onSendMessageEvent(socket, message, roomId, u);
      });
      socket.on(events.onJoinRoom, (id) => {
        onJoinRoomEvent(socket, id);
      });
      socket.on(events.onCreateRoom, () => {
        onCreateRoomEvent(socket);
      });
      socket.on(events.onLeaveRoom, (id) => {
        onLeaveRoomEvent(socket, id);
      });
    })
    .catch(() => {
      emitLoginFailedEvent(socket, "Error logging in!");
    });
}

/** Emits the login success event
 * @param socket The socket that the event should be emitted on
 * @param user The user object to be sent with the event
 */
export function emitLoginSuccessEvent(socket: Socket, user: UserType) {
  const { password, ...userRo } = user;
  socket.emit(events.onLoginSuccess, userRo);
}

/** Emits the login failed event
 * @param socket The socket that the event should be emitted on
 * @param message The message to be sent to the client
 */
export function emitLoginFailedEvent(socket: Socket, message: string) {
  socket.emit(events.onLoginFailed, message);
}

/** Event triggered when server receives register request
 * @param socket The socket of the connection
 * @param user Object containing username, password and profile (picture link) of the user
 */
export async function onRegisterEvent(
  socket: Socket,
  user: Omit<UserType, "_id">
) {
  const u = await userService.findOne({ name: user.name });
  if (u) {
    emitRegisterFailedEvent(socket, "User already exists!");
    return;
  }

  userService
    .insert(user)
    .then((res) => {
      const u = res._doc;
      emitRegisterSuccessEvent(socket, u);
    })
    .catch(() => {
      emitRegisterFailedEvent(socket, "Could not complete registration!");
    });
}

/** Emits the registration success event
 * @param socket The socket that the event should be emitted on
 * @param user The user object to be sent with the event
 */
export function emitRegisterSuccessEvent(socket: Socket, user: UserType) {
  const { password, ...userRo } = user;
  socket.emit(events.onRegisterSuccess, userRo);
}

/** Emits the registration failed event
 * @param socket The socket that the event should be emitted on
 * @param message The message to be sent to the client
 */
export function emitRegisterFailedEvent(socket: Socket, message: string) {
  socket.emit(events.onRegisterFailed, message);
}
