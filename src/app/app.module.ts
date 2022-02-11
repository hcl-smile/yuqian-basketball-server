import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '../login/login.module';
import { LogoutModule } from '../logout/logout.module';
import { PlayerModule } from '../player/player.module';
import { NewsModule } from '../news/news.module';

@Module({
  imports: [LoginModule, LogoutModule, PlayerModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
