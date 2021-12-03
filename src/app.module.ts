import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WsConnectionModule } from './modules/ws-connection/ws-connection.module';

@Module({
  imports: [WsConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
