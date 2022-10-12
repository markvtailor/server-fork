/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)
    app.enableCors()

    const config = new DocumentBuilder()
    .setTitle('YouClone')
    .setDescription('Testing')
    .setVersion("1.0")
    .build()

    const documentation = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('swagger',app, documentation)


    await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
  } catch (e) {
    console.log(e)
  }

}
start()