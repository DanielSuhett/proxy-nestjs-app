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
      host: process.env.DATABASE_URL,
      database: process.env.MYSQL_DATABASE,
      port: parseInt(process.env.PORT, 10) || 3306,
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      synchronize: true,
      autoLoadEntities: true,
    }),
    DogModule,
  ],
})
export class AppModule {}
