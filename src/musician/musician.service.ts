import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { MusicianResponseDto } from './musician-response.dto';
import { MusicianAlbumService } from 'src/musician-album/musician-album.service';

@Injectable()
export class MusicianService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly musicianAlbumService: MusicianAlbumService,
  ) {}

  private selectedMusicianData = {
    id: true,
    name: true,
    info: true,
    photo: true,
    type: true,
    gender: true,
    nationality: true,
    createdAt: true,
    updatedAt: true,
    musicianAlbums: {
      select: { id: true, name: true, image: true },
      take: 1,
    },
  };

  async create(musicianData: CreateMusicianDto): Promise<MusicianResponseDto> {
    const { musicianAlbums, ...others } = musicianData;

    const musician = await this.prisma.musician.create({
      data: { ...others },
      select: this.selectedMusicianData,
    });

    const musicianAlbumData = musicianAlbums.map((musicianAlbum) => {
      return { ...musicianAlbum, musicianId: musician.id };
    });

    await this.musicianAlbumService.create(musicianAlbumData[0]);

    return musician;
  }
}
