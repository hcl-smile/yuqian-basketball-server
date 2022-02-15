import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PlayerModule } from '../player/player.module';

@Module({
  imports: [UserModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
