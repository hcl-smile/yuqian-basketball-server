import { ApiProperty } from '@nestjs/swagger';

export class CommonDto {
  @ApiProperty({ example: new Date(), description: '创建时间' })
  createTime: Date;

  @ApiProperty({ example: new Date(), description: '更新时间' })
  updateTime: Date;
}
