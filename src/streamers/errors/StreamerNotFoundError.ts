import { HttpStatus } from '@nestjs/common';
import { DomainError } from 'src/libs/error';
import { ErrorId } from 'src/libs/error/common';

export class StreamerNotFoundError extends DomainError {
  constructor() {
    super(
      'Streamer not found.',
      HttpStatus.NOT_FOUND,
      ErrorId.STREAMER_NOT_FOUND,
    );
  }
}
