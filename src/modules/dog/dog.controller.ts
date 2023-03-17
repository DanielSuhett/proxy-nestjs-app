import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from './entities/dog.entity';

@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('/dogs')
  async findDogs(): Promise<Dog[]> {
    return await this.dogService.findAll();
  }

  @Post('/dog')
  async createDog(@Body() dog: Dog): Promise<Dog> {
    return await this.dogService.create(dog);
  }
}
