import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({ example: '成功', description: '返回结果文字描述' })
  message: string;
}
