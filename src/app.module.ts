import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './nestjs-products/product.controller';
import { ProductModule } from './nestjs-products/product.module';
import { SubscribersModule } from './nestjs_email_subscription/subscribers.module';


@Module({
  imports: [
    ProductModule, 
    SubscribersModule,

    ConfigModule.forRoot({
      validationSchema: Joi.object({
        GRPC_CONNECTION_URL_1: Joi.string().required(),
        GRPC_CONNECTION_URL_2: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),                   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}




 