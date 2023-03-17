import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      database: 'dog',
      port: 3306,
      username: 'root',
      password: 'root',
      synchronize: true,
      autoLoadEntities: true,
    }),
    DogModule,
  ],
})
export class AppModule {}
