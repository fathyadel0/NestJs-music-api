import { Module } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { MusicianController } from './musician.controller';
import { MusicianAlbumModule } from 'src/musician-album/musician-album.module';

@Module({
  imports: [MusicianAlbumModule],
  controllers: [MusicianController],
  providers: [MusicianService],
})
export class MusicianModule {}
