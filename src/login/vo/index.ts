import { UserVO } from '../../interface/vo';

export interface LoginVO extends UserVO {
  code: string;
}
