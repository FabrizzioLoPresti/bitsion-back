import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ description: 'Nombre del Cliente' })
  nombrecompleto: string;
}
