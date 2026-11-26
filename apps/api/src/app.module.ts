import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TRPCModule } from 'nestjs-trpc';
import { serverRouter } from './app.router';

@Module({
  imports: [TRPCModule.forRoot({
    basePath: '/trpc',
    logger: new Logger('TRPCModule'),
  }), serverRouter],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
