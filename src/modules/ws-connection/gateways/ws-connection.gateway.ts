import { OnGatewayDisconnect, WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ConnectionClient } from '../dtos/connection-client.dto';
import { WS_CONNECTION_EVENTS } from '../events';
import { WsConnectionService } from '../services/ws-connection/ws-connection.service';

@WebSocketGateway()
export class WsConnectionGateway implements OnGatewayConnection ,OnGatewayDisconnect {

  constructor(private readonly wsConnectionService: WsConnectionService) { }


  @WebSocketServer()
  private readonly socketServer: Server;

  handleConnection(client: any, ...args: any[]) {
    this.socketServer.emit(WS_CONNECTION_EVENTS.CLIENTS_DATABASE_UPDATED, this.wsConnectionService.getAllClients(client.id));
  }

  handleDisconnect(client: Socket) {
    this.wsConnectionService.deleteClient(client.id);
    this.socketServer.emit(WS_CONNECTION_EVENTS.CLIENTS_DATABASE_UPDATED, this.wsConnectionService.getAllClients(client.id));
  }

  @SubscribeMessage(WS_CONNECTION_EVENTS.PEER_CONNECTION_ID)
  handlePeerConnectionId(client: Socket, connectionClient: ConnectionClient) {
    this.wsConnectionService.insertClient(connectionClient);
    this.socketServer.emit(WS_CONNECTION_EVENTS.CLIENTS_DATABASE_UPDATED, this.wsConnectionService.getAllClients(client.id));
  }

}
