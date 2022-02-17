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
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { MessageDto } from '../dto';

@Controller('player')
@ApiTags('球员')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @ApiOperation({ description: '创建球员' })
  @ApiOkResponse({ type: CreatePlayerDto, status: 201 })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ description: '获取所有球员' })
  @ApiOkResponse({ type: UpdatePlayerDto, status: 200, isArray: true })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: '获取球员详情' })
  @ApiOkResponse({ type: UpdatePlayerDto, status: 200 })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ description: '更新球员信息' })
  @ApiOkResponse({ type: UpdatePlayerDto, status: 200 })
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ description: '删除球员' })
  @ApiOkResponse({ type: MessageDto, status: 200 })
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
