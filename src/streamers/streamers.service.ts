import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';

import { Streamer } from 'src/common/entities';
import { CreateStreamerDto } from './dto/CreateStreamerDto';

@Injectable()
export class StreamersService {
  constructor(
    @InjectRepository(Streamer)
    private readonly streamersRepository: MongoRepository<Streamer>,
  ) {}

  async findAll(): Promise<Streamer[]> {
    return await this.streamersRepository.find();
  }

  async findOne(id: string): Promise<Streamer> {
    return await this.streamersRepository.findOneBy({ _id: new ObjectId(id) });
  }

  async create(createStreamerDto: CreateStreamerDto): Promise<boolean> {
    const streamer = this.streamersRepository.create(createStreamerDto);

    await this.streamersRepository.save(streamer);
    return true;
  }
}
