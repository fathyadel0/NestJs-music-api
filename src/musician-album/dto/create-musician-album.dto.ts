import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMusicianAlbumDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsOptional()
  musicianId: number;
}
