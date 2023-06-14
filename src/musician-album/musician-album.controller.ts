import { Body, Controller, Post } from '@nestjs/common';
import { MusicianAlbumService } from './musician-album.service';
import { CreateMusicianAlbumDto } from './dto/create-musician-album.dto';
import { MusicianAlbumResponse } from './dto/musician-album-response.dto';

@Controller('musician-albums')
export class MusicianAlbumController {
  constructor(private readonly musicianAlbumService: MusicianAlbumService) {}

  @Post()
  async createMusicianAlbum(
    @Body() musicianAlbumData: CreateMusicianAlbumDto,
  ): Promise<MusicianAlbumResponse> {
    return await this.musicianAlbumService.create(musicianAlbumData);
  }
}
