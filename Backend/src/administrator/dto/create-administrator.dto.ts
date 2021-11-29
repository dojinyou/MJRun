import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAdministratorDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
