import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';

import { StreamersService } from '../streamers.service';

import { Streamer } from '../../common/entities';
import {
  STREAMER_REPOSITORY_TOKEN,
  mockStreamers,
  mockValidCreateStreamerDto,
} from './constans';

describe('Streamers Service', () => {
  let service: StreamersService;
  let repository: Repository<Streamer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StreamersService,
        {
          provide: STREAMER_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn().mockResolvedValue(mockStreamers),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<StreamersService>(StreamersService);
    repository = module.get<Repository<Streamer>>(STREAMER_REPOSITORY_TOKEN);
  });

  it('streamers service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('streamers repository should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('create service', () => {
    it('shoud call streamerRepository.create with correct params', async () => {
      await service.create(mockValidCreateStreamerDto);
      expect(repository.create).toHaveBeenCalledWith(
        mockValidCreateStreamerDto,
      );
    });
  });

  describe('findAll service', () => {
    it('should return and array of streamers', async () => {
      const streamers = await service.findAll();
      expect(streamers).toEqual(mockStreamers);
    });
  });
});
