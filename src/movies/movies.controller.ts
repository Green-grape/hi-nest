import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies') //url의 entry point를 의미한다.
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    //Path variable사용
    //@Param(""):paramator를 가져옴=express의 params
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData:CreateMovieDto) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
  // @Put() //리소스 전체 업데이트
  @Patch('/:id') //리소스 일부 업데이트
  path(@Param('id') movieId: number, @Body() updateData:UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
