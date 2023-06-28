import { Controller, Param, Get, Post, Body, Put } from '@nestjs/common';
import { StreamersService } from './streamers.service';
import { CreateStreamerDto } from './dto/CreateStreamerDto';
import { VoteDto } from './dto/VoteDto';

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

  @Put(':id/vote')
  async update(@Body() vote: VoteDto) {
    return await this.streamersService.makeVote(vote);
  }
}
