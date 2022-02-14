import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, MessageDto } from './dto';
import {
  ApiProperty,
  ApiBody,
  ApiParam,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto, description: '创建用户' })
  @ApiOkResponse({ status: 201, description: '创建成功', type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiParam({ type: '', description: '查询所有用户', name: '' })
  @ApiOkResponse({
    status: 200,
    description: '查询成功',
    type: [CreateUserDto],
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, description: '查询成功', type: CreateUserDto })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ status: 200, description: '更新成功', type: CreateUserDto })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 200, description: '删除成功', type: MessageDto })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
