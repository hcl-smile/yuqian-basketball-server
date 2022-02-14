import { ApiProperty } from '@nestjs/swagger';

export class IdDto {
  @ApiProperty({ example: '123', description: '用户id' })
  id: string;
}
