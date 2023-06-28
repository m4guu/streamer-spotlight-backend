import { HttpStatus } from '@nestjs/common';
import { DomainError } from 'src/libs/error';
import { ErrorId } from 'src/libs/error/common';

export class MakeVoteFailedError extends DomainError {
  constructor() {
    super(
      'Failed to make vote.',
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorId.MAKE_VOTE_FAILED,
    );
  }
}
