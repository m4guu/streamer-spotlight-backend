import { Test, TestingModule } from '@nestjs/testing';
import { StreamersController } from '../streamers.controller';
import { StreamersService } from '../streamers.service';
import {
  mockStreamer,
  mockStreamers,
  mockValidCreateStreamerDto,
} from './constans';
import { CreateStreamerDto } from '../dto/CreateStreamerDto';

describe('Streamers Controller', () => {
  let controller: StreamersController;
  let service: StreamersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamersController],
      providers: [
        {
          provide: StreamersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockStreamers),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                ...mockStreamer,
                id,
              }),
            ),
            create: jest
              .fn()
              .mockImplementation((createStreamerDto: CreateStreamerDto) =>
                Promise.resolve({ _id: '1', ...createStreamerDto }),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get<StreamersController>(StreamersController);
    service = module.get<StreamersService>(StreamersService);
  });

  it('streamers controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('streamers service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll controller', () => {
    it('should return and array of streamers', () => {
      expect(controller.findAll()).resolves.toEqual(mockStreamers);
    });
  });

  describe('findOne controller', () => {
    it('should find a streamer', () => {
      const testId = '1';
      controller.findOne(testId);
      expect(service.findOne).toHaveBeenCalled();
      expect(controller.findOne(testId)).resolves.toEqual({
        ...mockStreamer,
        id: testId,
      });
    });
  });

  describe('create controller', () => {
    it('should create streamer', () => {
      expect(controller.create(mockValidCreateStreamerDto)).resolves.toEqual({
        _id: '1',
        ...mockValidCreateStreamerDto,
      });
      expect(service.create).toHaveBeenCalled();
      expect(service.create).toHaveBeenCalledWith(mockValidCreateStreamerDto);
    });
  });
});
