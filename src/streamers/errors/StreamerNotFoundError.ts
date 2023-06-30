import { HttpStatus } from '@nestjs/common';
import { DomainError } from '../../libs/error';
import { ErrorId } from '../../libs/error/common';

export class StreamerNotFoundError extends DomainError {
  constructor() {
    super(
      'Streamer not found.',
      HttpStatus.NOT_FOUND,
      ErrorId.STREAMER_NOT_FOUND,
    );
  }
}
