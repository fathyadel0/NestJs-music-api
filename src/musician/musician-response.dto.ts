import { Gender } from '@prisma/client';

export class MusicianResponseDto {
  id: number;
  name: string;
  info: string;
  photo: string;
  type: string;
  gender: Gender;
  nationality: string;
  createdAt: Date;
  updatedAt: Date;
}
