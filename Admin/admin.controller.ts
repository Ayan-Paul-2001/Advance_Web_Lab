import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes,ValidationPipe, BadRequestException, UseInterceptors, UploadedFile, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('admin')
export class AdminController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly adminService: AdminService) {}

  /*@Get()
  getHello(): string {
    return this.adminService.getHello();
  }
  @Get ('photo/:id')
  getPhotoById(@Param('id', ParseIntPipe) id: number): string {
    return this.adminService.getPhotoById(id);
  }
   @Post('add')
   @UseInterceptors(
    FileInterceptor('nidImage', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + '-' + file.originalname;
          cb(null, uniqueName);
        },
      }),
      limits: {
        fileSize: 2 * 1024 * 1024,
      },
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
          return cb(
            new BadRequestException('Only JPG and PNG images are allowed.'),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  @UsePipes(new ValidationPipe({ whitelist: true }))
createAdmin(
  @Body() adminData: CreateAdminDto,
  @UploadedFile() nidImage: Express.Multer.File,
) {
  if (!nidImage) {
    throw new BadRequestException('NID image is required.');
  }


  console.log('Uploaded file:', nidImage.filename);

  return this.adminService.addAdminWithImage(adminData, nidImage.filename);
}
*/
 @Post('create')
 @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createUser(@Body() dto: CreateAdminDto) {
    return this.adminService.createAdmin(dto);
  }

  @Patch('status/:id/:status')
  updateStatus(@Param('id') id: number, @Param('status') status: 'active' | 'inactive') {
    return this.adminService.updateStatus(+id, status);
  }

  @Get('inactive')
  getInactiveAdmins() {
    return this.adminService.getInactiveAdmins();
  }

  @Get('older-than-40')
  getAdminsAbove40() {
    return this.adminService.getAdminsAboveAge(40);
  }
}
