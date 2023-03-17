import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  providers: [DogService],
  controllers: [DogController],
})
export class DogModule {}
