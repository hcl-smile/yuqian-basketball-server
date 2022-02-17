import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PlayerModule } from '../player/player.module';
import { NewsModule } from '../news/news.module';

@Module({
  imports: [UserModule, PlayerModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
