import { onConnectEvent } from "./Connection.event";
import {
  onLoginEvent,
  emitLoginSuccessEvent,
  emitLoginFailedEvent,
  onRegisterEvent,
  emitRegisterSuccessEvent,
  emitRegisterFailedEvent,
} from "./auth.event";
import { onSendMessageEvent, emitReceiveMessageEvent } from "./message.event";
import {
  onJoinRoomEvent,
  emitJoinedRoomEvent,
  onCreateRoomEvent,
  onLeaveRoomEvent,
  emitLeftRoomEvent,
} from "./room.event";

export {
  onConnectEvent,
  onLoginEvent,
  emitLoginSuccessEvent,
  emitLoginFailedEvent,
  onRegisterEvent,
  emitRegisterSuccessEvent,
  emitRegisterFailedEvent,
  onSendMessageEvent,
  emitReceiveMessageEvent,
  onJoinRoomEvent,
  emitJoinedRoomEvent,
  onCreateRoomEvent,
  onLeaveRoomEvent,
  emitLeftRoomEvent,
};

/** An object containing the possible events and their string names */
export const events = {
  onConnect: "connection",
  onLogin: "login",
  onLoginSuccess: "loginSuccess",
  onLoginFailed: "loginFailed",
  onRegister: "register",
  onRegisterSuccess: "registerSuccess",
  onRegisterFailed: "registerFailed",
  onSendMessage: "sendMessage",
  onReceiveMessage: "receiveMessage",
  onJoinRoom: "joinRoom",
  onJoinedRoom: "joinedRoom",
  onCreateRoom: "createRoom",
  onLeaveRoom: "leaveRoom",
  onLeftRoom: "leftRoom",
};
