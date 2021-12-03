import { Test, TestingModule } from '@nestjs/testing';
import { WsConnectionGateway } from './ws-connection.gateway';

describe('WsConnectionGateway', () => {
  let gateway: WsConnectionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsConnectionGateway],
    }).compile();

    gateway = module.get<WsConnectionGateway>(WsConnectionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
