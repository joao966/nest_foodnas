import { registers } from './entities/register.entity';

export const registersProviders = [
  {
    provide: 'REGISTER_REPOSITORY',
    useValue: registers,
  },
];
