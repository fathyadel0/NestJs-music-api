import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicianAlbumDto } from './dto/create-musician-album.dto';
import { MusicianAlbumResponse } from './dto/musician-album-response.dto';

@Injectable()
export class MusicianAlbumService {
  constructor(private readonly prisma: PrismaService) {}

  private musicianAlbumData = {
    id: true,
    name: true,
    image: true,
    createdAt: true,
    updatedAt: true,
    musics: {
      select: {
        id: true,
        name: true,
        description: true,
        artist: true,
        type: true,
        language: true,
        rate: true,
        source: true,
        image: true,
      },
      take: 1,
    },
  };

  async create(musicianAlbumData: CreateMusicianAlbumDto): Promise<MusicianAlbumResponse> {
    return await this.prisma.musicianAlbum.create({
      data: musicianAlbumData,
      select: this.musicianAlbumData,
    });
  }
}
