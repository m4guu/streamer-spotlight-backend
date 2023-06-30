import { Controller, Param, Get, Post, Body, Put } from '@nestjs/common';

import { StreamersService } from './streamers.service';

import { AppHttpException } from '../libs/error';

import { CreateStreamerDto } from './dto/CreateStreamerDto';
import { VoteDto } from './dto/VoteDto';

@Controller('streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.streamersService.findOne(id);
    } catch (error) {
      throw new AppHttpException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.streamersService.findAll();
    } catch (error) {
      throw new AppHttpException(error);
    }
  }

  @Post()
  async create(@Body() createStreamerDto: CreateStreamerDto) {
    try {
      return await this.streamersService.create(createStreamerDto);
    } catch (error) {
      throw new AppHttpException(error);
    }
  }

  @Put(':id/vote')
  async update(@Body() vote: VoteDto) {
    try {
      return await this.streamersService.makeVote(vote);
    } catch (error) {
      throw new AppHttpException(error);
    }
  }
}
