import { Controller } from '@nestjs/common';
import { SingerAlbumService } from './singer-album.service';

@Controller('singer-albums')
export class SingerAlbumController {
  constructor(private readonly singerAlbumService: SingerAlbumService) {}
}
