import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { Artist } from './entities/artist.entity';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Resolver(() => Artist)
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  @Mutation(() => Artist)
  createArtist(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistService.create(createArtistInput);
  }

  @Query(() => [Artist], { name: 'artist' })
  findAll() {
    return this.artistService.findAll();
  }

  @Query(() => Artist, { name: 'artist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.artistService.findOne(id);
  }

  @Mutation(() => Artist)
  updateArtist(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistService.update(updateArtistInput.id, updateArtistInput);
  }

  @Mutation(() => Artist)
  removeArtist(@Args('id', { type: () => Int }) id: number) {
    return this.artistService.remove(id);
  }
}
