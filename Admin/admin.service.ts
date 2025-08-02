import { Inject, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm'; 

@Injectable()
export class AdminService {
  /*users: any;
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
addAdminWithImage(adminData: CreateAdminDto, imageFileName: string) {
  const newAdmin = {
    ...adminData,
    nidImage: imageFileName,
  };


  this.admins.push(newAdmin);

  return {
    message: 'Admin created Successfully with image',
    admin: newAdmin,
  };
}
  */
   constructor(
    @InjectRepository(Admin)
    private readonly adminRepo: Repository<Admin>,
  ) {}

  createAdmin(dto: CreateAdminDto) {
    const admin = this.adminRepo.create(dto as Partial<Admin>); // Cast DTO to Partial<Admin>
    return this.adminRepo.save(admin);
  }

  async updateStatus(id: number, status: 'active' | 'inactive') {
    const admin = await this.adminRepo.findOne({ where: { id: id } });
    if (!admin) throw new Error('Admin not found');

    admin.status = status;
    return this.adminRepo.save(admin);
  }

  getInactiveAdmins() {
    return this.adminRepo.find({ where: { status: 'inactive' } });
  }

  getAdminsAboveAge(age: number = 40) {
    return this.adminRepo.createQueryBuilder('admin')
      .where('admin.age > :age', { age })
      .getMany();
  }
}


