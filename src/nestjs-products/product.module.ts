import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from "path";
import { ProductController } from './product.controller';
 
@Module({
  imports: [ConfigModule],
  controllers: [ProductController],
  providers: [
    {
      provide: 'PRODUCT_PACKAGE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'products',
            protoPath: join(process.cwd(), 'src/nestjs-products/proto/product.proto'),
            url: configService.get('GRPC_CONNECTION_URL_2')
          },
        })
      },
      inject: [ConfigService],
    }
  ],
})
export class ProductModule {}
