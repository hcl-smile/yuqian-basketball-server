import { TimeStampDto } from '../../dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export enum UserRoleEnm {
  'admin',
  'user',
}

export class CreateUserDto extends PartialType(TimeStampDto) {
  @ApiProperty({ example: 'id', description: 'id' })
  private readonly id: number;

  @ApiProperty({ example: 'user', description: '用户名' })
  private readonly username: string;

  @ApiProperty({ example: 'user12345', description: '密码' })
  password: string;

  @ApiProperty({ example: 'user_nickname', description: '昵称' })
  nickname: string;

  @ApiProperty({ example: 'http://www.xxx.com', description: '用户头像' })
  avatar: string;

  @ApiProperty({ example: '123@qq.com', description: '邮箱' })
  email: string;

  @ApiProperty({
    example: '0管理员',
    description: '用户角色：0管理员，1普通用户',
  })
  role: UserRoleEnm;
}
