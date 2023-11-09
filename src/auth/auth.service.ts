import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class AuthService {
  constructor(
    private clientesService: ClientesService,
    private jwtService: JwtService,
  ) {}

  async signIn(nombrecompleto: string): Promise<any> {
    const cliente =
      await this.clientesService.findOneByUsername(nombrecompleto);

    if (!cliente) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // const { password, ...result } = user;
    const payload = { sub: cliente.id, username: cliente.nombrecompleto };

    // return result;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
