import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateMusicianAlbumDto } from 'src/musician-album/dto/create-musician-album.dto';

export class CreateMusicianDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  info: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateMusicianAlbumDto)
  musicianAlbums: CreateMusicianAlbumDto[];
}
