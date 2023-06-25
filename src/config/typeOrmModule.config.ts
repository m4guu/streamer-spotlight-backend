import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { Environment } from './env/env.config';
import { Streamer } from 'src/common/entities';

export const typeOrmModuleConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'mongodb',
    url: configService.get<string>(Environment.MONGODB_URI),
    entities: [Streamer],
    synchronize: true,
  };
};
