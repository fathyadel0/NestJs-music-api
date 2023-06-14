import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { CreateMusicianDto } from './dto/create-musician.dto';

@Controller('musicians')
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}

  @Get()
  async getAll() {}

  @Get(':musicianId')
  async getOne(@Param('musicianId', ParseIntPipe) musicianId: number) {}

  @Post()
  async create(@Body() musicianData: CreateMusicianDto) {
    return await this.musicianService.create(musicianData);
  }

  @Put(':musicianId')
  async update(
    @Param('musicianId', ParseIntPipe) musicianId: number,
    @Body() musicianData: CreateMusicianDto,
  ) {}

  @Delete(':musicianId')
  async delete(@Param('musicianId', ParseIntPipe) musicianId: number) {}
}
