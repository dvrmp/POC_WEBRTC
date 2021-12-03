import { Injectable } from '@nestjs/common';
import { ConnectionClient } from '../../dtos/connection-client.dto';

@Injectable()
export class WsConnectionService {
    public static clientsConnecteds: ConnectionClient[] = [];

    insertClient(connectionClient: ConnectionClient): void {
        WsConnectionService.clientsConnecteds.push(connectionClient);
    }

    deleteClient(id: string): void {
        WsConnectionService.clientsConnecteds = WsConnectionService.clientsConnecteds.filter(x => x.socketId !== id);
    }

    getClient(id: string): string {
        return WsConnectionService.clientsConnecteds.find(x => x.socketId === id).socketId;
    }

    getAllClients(id: string): string [] {
        return WsConnectionService.clientsConnecteds.map(con => con.peerId);
    }
}
