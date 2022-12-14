import { Injectable, Inject } from '@nestjs/common';
import { typeListRegister } from 'src/types/registro';
import { CreateRegistersDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { registers } from './entities/register.entity';

@Injectable()
export class RegistersService {

  constructor(
    @Inject('REGISTER_REPOSITORY')
    private registersRepository: typeof registers
  ) {}

  async create(CreateRegistersDto: CreateRegistersDto): Promise<registers> {
    return this.registersRepository.create(CreateRegistersDto);
  }

  async findAll(): Promise<typeListRegister> {
    const response = await this.registersRepository.findAll();

    return {
      message: "success",
      count: response.length,
      info: response
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(email: string, updateRegisterDto: UpdateRegisterDto) {
    return this.registersRepository.update(updateRegisterDto, {where: {email}});
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
