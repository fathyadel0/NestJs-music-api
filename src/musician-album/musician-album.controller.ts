import { Controller } from '@nestjs/common';
import { MusicianAlbumService } from './musician-album.service';

@Controller('musician-album')
export class MusicianAlbumController {
  constructor(private readonly musicianAlbumService: MusicianAlbumService) {}
}
