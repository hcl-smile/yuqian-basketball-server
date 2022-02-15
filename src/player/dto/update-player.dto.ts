import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @ApiProperty({ example: 'id', description: 'id' })
  id: string;
}
