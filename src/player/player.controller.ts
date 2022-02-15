import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {
  ApiBody,
  ApiTags,
  ApiProperty,
  ApiParam,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('player')
@ApiTags('球员')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @ApiOperation({ description: '创建球员' })
  @ApiOkResponse({ type: UpdatePlayerDto, status: 201 })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ description: '获取所有球员' })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
