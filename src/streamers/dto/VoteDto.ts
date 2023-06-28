import { IsBoolean, IsString } from 'class-validator';

export class VoteDto {
  @IsBoolean()
  isLike: boolean;

  @IsString()
  streamerId: string;

  @IsString()
  userId: string;
}
