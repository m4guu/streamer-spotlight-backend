import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

import { CreateStreamerDto } from '../dto/CreateStreamerDto';
import { VoteDto } from '../dto/VoteDto';
import { StreamingPlatforms } from '../../common/enums';
import { Streamer } from '../../common/entities';

export const STREAMER_REPOSITORY_TOKEN = getRepositoryToken(Streamer);

export const mockStreamer: Streamer = {
  id: new ObjectId('60d8d73d680abc001f8f8f8f'),
  name: 'Streamer 1',
  platform: StreamingPlatforms.TWITCH,
  description:
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta sed animi quis adipisci sequi!',
  score: { likes: [], dislikes: [] },
};

export const mockStreamers: Streamer[] = [
  {
    id: new ObjectId('60d8d73d680abc001f8f8f8f'),
    name: 'Streamer 1',
    platform: StreamingPlatforms.TWITCH,
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta sed animi quis adipisci sequi!',
    score: { likes: [], dislikes: [] },
  },
];

export const mockValidCreateStreamerDto: CreateStreamerDto = {
  name: 'New Streamer',
  platform: StreamingPlatforms.RUMBLE,
  description:
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta sed animi quis adipisci sequi!',
  score: { likes: [], dislikes: [] },
};

export const mockVote: VoteDto = { userId: '1', streamerId: '1', isLike: true };
