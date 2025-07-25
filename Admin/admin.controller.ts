import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes,ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }
  @Get ('photo/:id')
  getPhotoById(@Param('id', ParseIntPipe) id: number): string {
    return this.adminService.getPhotoById(id);
  }
   @Post()
  @UsePipes(new ValidationPipe()) // Validates the data based on the DTO
  createAdmin(@Body() adminData: CreateAdminDto) {
    return this.adminService.addAdmin(adminData);
  }
}
