import { Module } from '@nestjs/common';
import { SubscribersController} from './subscribers.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from "path";
 
@Module({
  imports: [ConfigModule],
  controllers: [SubscribersController],
  providers: [
    {
      provide: 'SUBSCRIBERS_PACKAGE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'subscribers',
            protoPath: join(process.cwd(), 'src/nestjs_email_subscription/proto/subscriber.proto'),
            url: configService.get('GRPC_CONNECTION_URL_1')
          },
        })
      },
      inject: [ConfigService],
    }
  ],
})
export class SubscribersModule {}
