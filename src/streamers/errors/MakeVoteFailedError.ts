import { HttpStatus } from '@nestjs/common';
import { DomainError } from '../../libs/error';
import { ErrorId } from '../../libs/error/common';

export class MakeVoteFailedError extends DomainError {
  constructor() {
    super(
      'Failed to make the vote.',
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorId.MAKE_VOTE_FAILED,
    );
  }
}
