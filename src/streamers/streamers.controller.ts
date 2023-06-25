import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { StreamersService } from './streamers.service';
import { CreateStreamerDto } from './dto/CreateStreamerDto';

@Controller('streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.streamersService.findOne(id);
  }

  @Get()
  async findAll() {
    return await this.streamersService.findAll();
  }

  @Post()
  async create(@Body() createStreamerDto: CreateStreamerDto) {
    return await this.streamersService.create(createStreamerDto);
  }
}
