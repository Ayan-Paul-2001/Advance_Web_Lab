import { IsEmail, Matches,IsNotEmpty, Length, ValidateIf, isString, IsAlpha } from 'class-validator';
import { IsString, IsInt, Min, MaxLength, IsIn, IsOptional } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MaxLength(100)
  fullName: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsOptional()
  @IsIn(['active', 'inactive'])
  status?: 'active' | 'inactive';
}

/*export class CreateAdminDto {
    @IsAlpha(undefined, { message: 'Name must be contain only letters (A-Z or a-z)' })
      name: string;


  @IsEmail({}, { message: 'Email must be valid and contain @ in middle body' })
  @Matches(/@.*\.xyz$/, {
    message: 'Email must need to end with @xyz Domain'
  })
  email: string;


  @IsNotEmpty({ message: 'NID Must be Given' })
  @Matches(/^\d+$/, { message: 'NID must supports digits only' })
  @Length(10, 17, { message: 'NID range is between 10 and 17 digits' })
  nid: string;
}
*/