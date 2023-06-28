import { HttpStatus } from '@nestjs/common';
import { DomainError } from 'src/libs/error';
import { ErrorId } from 'src/libs/error/common';

export class CreateStreamerFailedError extends DomainError {
  constructor() {
    super(
      'Failed to create the streamer.',
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorId.CREATE_STREAMER_FAILED,
    );
  }
}
