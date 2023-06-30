import { IsString, IsEnum, IsObject, Length } from 'class-validator';
import { StreamingPlatforms } from '../../common/enums';
import { Score } from '../../common/interfaces';

export class CreateStreamerDto {
  @IsString()
  @Length(1, 15)
  name: string;

  @IsEnum(StreamingPlatforms)
  platform: StreamingPlatforms;

  @IsString()
  @Length(10, 50)
  description: string;

  @IsObject()
  score: Score;
}
