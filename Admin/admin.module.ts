import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminModule, AdminService],
})
export class AdminModule {}
