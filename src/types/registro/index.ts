import { registers } from "src/modules/registers/entities/register.entity";

export interface typeListRegister {
  message: string,
  count: number,
  info: registers[]
}
