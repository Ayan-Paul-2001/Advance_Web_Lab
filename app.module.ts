import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './Admin/admin.module'; // ✅ CORRECT PATH

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'apCSE',
      database: 'lab',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule, // ✅ This includes AdminController & AdminService
  ],
  controllers: [AppController], // ✅ No need to include AdminController here
  providers: [AppService],       // ✅ No need to include AdminService here
})
export class AppModule {}
