import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StreamersController } from './streamers.controller';
import { StreamersService } from './streamers.service';
import { Streamer } from 'src/common/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Streamer])],
  controllers: [StreamersController],
  providers: [StreamersService],
})
export class StreamersModule {}
