import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.prisma.clientes.create({
        data: createClienteDto,
      });

      return cliente;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const clientes = await this.prisma.clientes.findMany();

      if (!clientes || clientes.length === 0) {
        throw new Error('No se encontraron clientes');
      }

      return clientes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    try {
      const cliente = await this.prisma.clientes.findUnique({
        where: {
          id,
        },
      });

      if (!cliente) {
        throw new Error('No se encontró el cliente');
      }

      return cliente;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneByUsername(nombrecompleto: string) {
    try {
      const cliente = await this.prisma.clientes.findFirstOrThrow({
        where: {
          nombrecompleto,
        },
      });

      if (!cliente) {
        throw new Error('No se encontró el cliente');
      }

      return cliente;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    try {
      const cliente = await this.prisma.clientes.update({
        where: {
          id,
        },
        data: updateClienteDto,
      });

      if (!cliente) {
        throw new Error('No se encontró el cliente');
      }

      return cliente;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: number) {
    try {
      const cliente = await this.prisma.clientes.delete({
        where: {
          id,
        },
      });

      if (!cliente) {
        throw new Error('No se encontró el cliente');
      }

      return cliente;
    } catch (error) {
      throw new Error('No se pudo eliminar el cliente');
    }
  }
}
