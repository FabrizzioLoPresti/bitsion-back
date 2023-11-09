import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  // @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createClienteDto: CreateClienteDto,
    @Res() res: Response,
  ) {
    try {
      if (
        !createClienteDto.nombrecompleto ||
        !createClienteDto.edad ||
        !createClienteDto.genero ||
        createClienteDto.estado === null ||
        createClienteDto.estado === undefined
      ) {
        throw new Error('Todos los campos son obligatorios');
      }

      if (createClienteDto.edad < 0 || createClienteDto.edad > 120) {
        throw new Error('La edad debe estar entre 0 y 120 años');
      }

      if (
        createClienteDto.genero !== 'Masculino' &&
        createClienteDto.genero !== 'Femenino'
      ) {
        throw new Error('El género debe ser Masculino o Femenino');
      }

      const cliente = await this.clientesService.create(createClienteDto);

      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const clientes = await this.clientesService.findAll();

      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const cliente = await this.clientesService.findOne(+id);

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
    @Res() res: Response,
  ) {
    try {
      if (updateClienteDto.edad < 0 || updateClienteDto.edad > 120) {
        throw new Error('La edad debe estar entre 0 y 120 años');
      }

      if (
        updateClienteDto.genero !== 'Masculino' &&
        updateClienteDto.genero !== 'Femenino'
      ) {
        throw new Error('El género debe ser Masculino o Femenino');
      }

      const cliente = await this.clientesService.update(+id, updateClienteDto);

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const cliente = await this.clientesService.remove(+id);

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
