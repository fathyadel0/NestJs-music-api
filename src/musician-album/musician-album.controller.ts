import { Controller } from '@nestjs/common';
import { MusicianAlbumService } from './musician-album.service';

@Controller('musician-albums')
export class MusicianAlbumController {
  constructor(private readonly musicianAlbumService: MusicianAlbumService) {}
}
