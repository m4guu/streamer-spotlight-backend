import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { envFilePath, envConfig } from './config/env/env.config';
import { envValidation } from './config/env/env.validation';
import { typeOrmModuleConfig } from './config/typeOrmModule.config';
import { StreamersModule } from './streamers/streamers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      load: [envConfig],
      validationSchema: envValidation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return await typeOrmModuleConfig(configService);
      },
      inject: [ConfigService],
    }),
    StreamersModule,
  ],
})
export class AppModule {}
