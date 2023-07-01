import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// @Global()
// Is used when you want to provide a set of providers
// which should be available everywhere out-of-the-box.
// Making everything global is not a good design decision!
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
