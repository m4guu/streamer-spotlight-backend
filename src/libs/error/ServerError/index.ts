import { HttpStatus } from '@nestjs/common';
import DomainError from '../DomainError';
import { ErrorId } from '../common';

class ServerError extends DomainError {
  constructor() {
    super(
      'Something goes wrong. Please try later.',
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorId.INTERNAL_SERVER_ERROR,
    );
  }
}

export default ServerError;
