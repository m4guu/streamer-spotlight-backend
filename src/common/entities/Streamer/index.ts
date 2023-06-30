import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

import { StreamingPlatforms } from '../../../common/enums';
import { Score } from '../../../common/interfaces';

@Entity()
class Streamer {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  platform: StreamingPlatforms;

  @Column()
  description: string;

  @Column()
  score: Score;
}

export default Streamer;
