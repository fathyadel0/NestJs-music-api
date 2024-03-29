import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MusicianService } from './musician.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { MusicianResponseDto } from './dto/musician-response.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';
import { AtGuard } from 'src/auth/guard/at.guard';
import { QueryMusicianDto } from './dto/query-musician.dto';
import { CreateMusicianAlbumDto } from './dto/create-album.dto';
import { MusicianAlbum } from '@prisma/client';

@Controller('musicians')
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}

  @UseGuards(AtGuard)
  @Get()
  async getAll(): Promise<MusicianResponseDto[]> {
    return await this.musicianService.getAll();
  }

  @UseGuards(AtGuard)
  @Get('filtered')
  async getFiltered(
    @Query() musicianQuery: QueryMusicianDto,
  ): Promise<MusicianResponseDto[]> {
    return await this.musicianService.getFiltered(musicianQuery);
  }

  @UseGuards(AtGuard)
  @Get(':musicianId')
  async getOne(
    @Param('musicianId', ParseIntPipe) musicianId: number,
  ): Promise<MusicianResponseDto> {
    return await this.musicianService.getOne(musicianId);
  }

  @UseGuards(AtGuard)
  @Post()
  async create(
    @Body() musicianData: CreateMusicianDto,
  ): Promise<MusicianResponseDto> {
    return await this.musicianService.create(musicianData);
  }

  @UseGuards(AtGuard)
  @Put(':musicianId')
  async update(
    @Param('musicianId', ParseIntPipe) musicianId: number,
    @Body() musicianData: UpdateMusicianDto,
  ): Promise<MusicianResponseDto> {
    return await this.musicianService.update(musicianId, musicianData);
  }

  @UseGuards(AtGuard)
  @HttpCode(204)
  @Delete(':musicianId')
  async delete(
    @Param('musicianId', ParseIntPipe) musicianId: number,
  ): Promise<void> {
    return await this.musicianService.delete(musicianId);
  }

  @UseGuards(AtGuard)
  @Post(':musicianId/new-album')
  async newAlbum(
    @Param('musicianId', ParseIntPipe) musicianId: number,
    @Body() newAlbumData: CreateMusicianAlbumDto,
  ): Promise<MusicianAlbum> {
    return await this.musicianService.newAlbum(musicianId, newAlbumData);
  }
}
