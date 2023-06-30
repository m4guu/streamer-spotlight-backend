import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';

import { Streamer } from '../common/entities';
import { CreateStreamerDto } from './dto/CreateStreamerDto';
import { VoteDto } from './dto/VoteDto';

import { StreamerNotFoundError } from './errors/StreamerNotFoundError';
import { CreateStreamerFailedError } from './errors/CreateStreamerFailedError';
import { ServerError } from '../libs/error';

import { Error } from '../libs/error/common';
import { MakeVoteFailedError } from './errors/MakeVoteFailedError';

@Injectable()
export class StreamersService {
  constructor(
    @InjectRepository(Streamer)
    private readonly streamersRepository: MongoRepository<Streamer>,
  ) {}

  async findAll(): Promise<Streamer[] | Error> {
    try {
      return await this.streamersRepository.find();
    } catch (error) {
      throw new ServerError();
    }
  }

  async findOne(id: string): Promise<Streamer | Error> {
    try {
      return await this.streamersRepository.findOneBy({
        _id: new ObjectId(id),
      });
    } catch (error) {
      throw new StreamerNotFoundError();
    }
  }

  async create(createStreamerDto: CreateStreamerDto): Promise<boolean | Error> {
    const streamer = this.streamersRepository.create(createStreamerDto);
    try {
      await this.streamersRepository.save(streamer);
      return true;
    } catch (error) {
      throw new CreateStreamerFailedError();
    }
  }

  async makeVote(vote: VoteDto): Promise<boolean | Error> {
    const { userId, streamerId, isLike } = vote;

    const updateObject = isLike
      ? { $push: { 'score.likes': { userId } } }
      : { $push: { 'score.dislikes': { userId } } };

    try {
      await this.streamersRepository.findOneAndUpdate(
        { _id: new ObjectId(streamerId) },
        updateObject,
      );
      return true;
    } catch (error) {
      throw new MakeVoteFailedError();
    }
  }
}
