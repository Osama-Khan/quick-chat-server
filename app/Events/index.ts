import { onConnectEvent } from "./Connection.event";
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
  onSendMessage: "sendMessage",
  onReceiveMessage: "receiveMessage",
  onJoinRoom: "joinRoom",
  onJoinedRoom: "joinedRoom",
  onCreateRoom: "createRoom",
  onLeaveRoom: "leaveRoom",
  onLeftRoom: "leftRoom",
};
