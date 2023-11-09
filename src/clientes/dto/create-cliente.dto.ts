export class CreateClienteDto {
  nombrecompleto: string;
  edad: number;
  genero: string;
  estado: boolean;
  maneja?: boolean;
  lentes?: boolean;
  diabetico?: boolean;
  enfermedad?: string;
}
