import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ description: 'Nombre del Cliente' })
  nombrecompleto: string;
  @ApiProperty({ description: 'Edad del Cliente' })
  edad: number;
  @ApiProperty({ description: 'Genero del Cliente' })
  genero: string;
  @ApiProperty({ description: 'Estado del Cliente' })
  estado: boolean;
  @ApiProperty({ description: 'Maneja el Cliente' })
  maneja?: boolean;
  @ApiProperty({ description: 'Tiene lentes el Cliente' })
  lentes?: boolean;
  @ApiProperty({ description: 'Tiene diabetes el Cliente' })
  diabetico?: boolean;
  @ApiProperty({ description: 'Tiene alguna otra enfermedad el Cliente' })
  enfermedad?: string;
}
