import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

import { StreamingPlatforms } from 'src/common/enums';
import { Score } from 'src/common/interfaces';

@Entity()
class Streamer {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  platform: StreamingPlatforms;

  @Column()
  score: Score;
}

export default Streamer;
