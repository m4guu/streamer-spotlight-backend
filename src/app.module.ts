import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envFilePath, envConfig } from './config/env/env.config';
import { envValidation } from './config/env/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      load: [envConfig],
      validationSchema: envValidation,
    }),
  ],
})
export class AppModule {}
