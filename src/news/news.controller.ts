import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MessageDto } from '../dto';

@Controller('news')
@ApiTags('新闻')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ description: '创建新闻' })
  @ApiOkResponse({ type: CreateNewsDto, status: 201 })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ description: '获取所有新闻' })
  @ApiOkResponse({ type: UpdateNewsDto, status: 200, isArray: true })
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: '获取新闻信息' })
  @ApiOkResponse({ type: UpdateNewsDto, status: 200 })
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ description: '更新新闻信息' })
  @ApiOkResponse({ type: UpdateNewsDto, status: 200 })
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ description: '删除新闻' })
  @ApiOkResponse({ type: MessageDto, status: 200 })
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
