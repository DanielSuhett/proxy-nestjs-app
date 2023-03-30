import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from './entities/dog.entity';

@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('/dogs')
  async findDogs(): Promise<Dog[]> {
    return await this.dogService.findAll();
  }

  @Put('/dog')
  async updateDogs(): Promise<boolean> {
    return await this.dogService.update();
  }

  @Post('/dog')
  async createDog(@Body() dog: Dog): Promise<Dog> {
    return await this.dogService.create(dog);
  }
}
