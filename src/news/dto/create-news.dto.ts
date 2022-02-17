import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @ApiProperty({ example: 'http://www.pic.com', description: '图片链接' })
  picUrl: string;

  @ApiProperty({ example: '今日詹皇三双', description: '新闻标题' })
  title: string;

  @ApiProperty({ example: '詹皇50分力克勇士3巨头', description: '新闻描述' })
  desc: string;

  @ApiProperty({ example: '59', description: '点赞数' })
  fabulous: number;

  @ApiProperty({ example: '5623', description: '浏览数' })
  views: number;
}
