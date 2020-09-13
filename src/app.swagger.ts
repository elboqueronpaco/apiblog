import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('APIBlog')
        .setDescription('Esta es una API Creada con NestJs con un CRUD básico para un Blog')
        .build()
        const document = SwaggerModule.createDocument(app, swaggerConfig)
        SwaggerModule.setup('/docs', app, document)
}