import { ApiProperty } from '@nestjs/swagger';

export enum SexEnum {
  male,
  female,
}

export enum PositionEnum {
  point,
  score,
  forward,
  powerForward,
  center,
}

export class CreatePlayerDto {
  @ApiProperty({ example: 'Michael', description: '用户名' })
  name: string;

  @ApiProperty({ example: '男', description: '性别' })
  sex: SexEnum;

  @ApiProperty({ example: '175', description: '身高' })
  height: number;

  @ApiProperty({ example: '控球后卫', description: '位置' })
  position: PositionEnum;

  @ApiProperty({ example: '15', description: '助攻' })
  assists: number;

  @ApiProperty({ example: '擅长突破', description: '特点' })
  character: string;

  @ApiProperty({ example: '来自玉前村山前', description: '简介' })
  desc?: string;
}
