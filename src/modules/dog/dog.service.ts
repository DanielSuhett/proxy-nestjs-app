import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dog } from './entities/dog.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
  ) {}

  async findAll(): Promise<Dog[]> {
    return this.dogRepository.find();
  }

  async create(dog: Dog): Promise<Dog> {
    return this.dogRepository.save(dog);
  }
}
