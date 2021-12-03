import { Module } from '@nestjs/common';
import { WsConnectionGateway } from './gateways/ws-connection.gateway';
import { WsConnectionService } from './services/ws-connection/ws-connection.service';

@Module({
  providers: [WsConnectionGateway, WsConnectionService]
})
export class WsConnectionModule {}
