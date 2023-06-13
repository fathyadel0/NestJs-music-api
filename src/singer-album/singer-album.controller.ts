import { Controller } from '@nestjs/common';
import { SingerAlbumService } from './singer-album.service';

@Controller('singer-album')
export class SingerAlbumController {
  constructor(private readonly singerAlbumService: SingerAlbumService) {}
}
