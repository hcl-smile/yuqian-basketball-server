import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @ApiProperty({ example: 'id', description: 'id' })
  id: number;
}
