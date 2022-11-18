import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, //validation decorator를 사용하지 않는 속송의 유효성 검사 개체를 제거
      forbidNonWhitelisted:true, //화이트리스트에 없는 속성이 있으면 리퀘스트를 무시하고 에러를 발생시킴
      transform:true //유저가 보낸값을 우리가 원하는 값으로 변경해줌
    })
  );
  await app.listen(5501);
}
bootstrap();
