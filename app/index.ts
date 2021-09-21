import { Server } from "socket.io";

/** Creates a QuickChat server
 * @param port Port number to serve at
 * @param clientUrl URL of the client to add in CORS
 */
export function createServer(port: number, clientUrl: string): void {
  const io = new Server(port, {
    cors: {
      origin: [clientUrl],
    },
  });
}
