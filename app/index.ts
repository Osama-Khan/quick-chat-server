import { Server } from "socket.io";
import { events, onConnectEvent } from "./Events";
import { dbService } from "./services";

/** Creates a QuickChat server
 * @param port Port number to serve at
 * @param clientUrl URL of the client to add in CORS
 */
export function createServer(port: number, clientUrl: string): void {
  // Initialize Database connection
  dbService.initConnection();

  const io = new Server(port, {
    cors: {
      origin: [clientUrl],
    },
  });

  io.on(events.onConnect, onConnectEvent);
}
