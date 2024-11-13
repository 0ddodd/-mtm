import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistResolver } from './artist.resolver';

@Module({
  providers: [ArtistResolver, ArtistService],
})
export class ArtistModule {}
