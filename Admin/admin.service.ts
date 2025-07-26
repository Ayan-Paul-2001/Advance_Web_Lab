import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './admin.dto';

@Injectable()
export class AdminService {
  users: any;
  admins: CreateAdminDto[] = [];
  addAdmin(adminData: CreateAdminDto) {
  this.admins.push(adminData);
   return {
      message: 'Admin created successfully',
      admin: adminData,
      totalAdmins: this.admins.length,
    };
  }
  getPhoto(id: number): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'I am Ayan Paul.';
  }
  getPhotoById(id: number): string {
    return `Photo with ID: ${id}`;
  }
  addUser(user: { name: string; email: string }) {
    this.users.push(user);
    return {
      message: 'User created successfully',
      user,
    };
}
}
