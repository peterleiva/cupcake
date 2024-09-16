import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category';
import { DATABASE_CONNECTION } from './app.constants';

@Module({
  imports: [MongooseModule.forRoot(DATABASE_CONNECTION), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
