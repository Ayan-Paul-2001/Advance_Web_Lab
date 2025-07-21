import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './Admin/admin.controller';

@Module({
  imports: [],
  controllers: [AdminController, AdminController],
  providers: [AppService],
})
export class AppModule {}
