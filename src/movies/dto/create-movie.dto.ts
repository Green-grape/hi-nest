import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
  //dto:data transfer object
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({each:true})
  @IsOptional()
  readonly genres: string[];
}
