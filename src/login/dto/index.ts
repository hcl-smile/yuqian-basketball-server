import { UserDTO } from '../../interface/dto';

export interface LoginDTO extends UserDTO {
  code: string;
}
