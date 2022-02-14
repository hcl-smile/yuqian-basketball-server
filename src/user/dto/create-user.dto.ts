import { CommonDto } from '../../dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends CommonDto {
  @ApiProperty({ example: 'id', description: 'id' })
  id: number;

  @ApiProperty({ example: 'user', description: '用户名' })
  username: string;

  @ApiProperty({ example: 'user12345', description: '密码' })
  password: string;

  @ApiProperty({ example: 'user_nickname', description: '昵称' })
  nickname: string;

  @ApiProperty({ example: 'http://www.xxx.com', description: '用户头像' })
  avatar: string;

  @ApiProperty({ example: '123@qq.com', description: '邮箱' })
  email: string;

  @ApiProperty({ example: '普通用户', description: '角色' })
  role: string;
}
