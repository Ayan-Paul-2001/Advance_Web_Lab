import { IsEmail, Matches,IsNotEmpty, ValidateIf, isString, IsAlpha } from 'class-validator';

export class CreateAdminDto {
    @IsAlpha(undefined, { message: 'Name must be contain only letters (A-Z or a-z)' })
      name: string;


  @IsEmail({}, { message: 'Email must be valid and contain @ in middle body' })
  @Matches(/@.*\.xyz$/, {
    message: 'Email must need to end with @xyz Domain'
  })
  email: string;
}
