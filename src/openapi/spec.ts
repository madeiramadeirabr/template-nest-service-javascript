import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { APP_NAME, APP_VERSION } from '../main';

/**
 * @see https://docs.nestjs.com/openapi/introduction
 */
class SwaggerSpec {
  static configure() {
    return new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription('API documentation')
      .setVersion(APP_VERSION)
      .build();
  }
  static generateDocs(app) {
    const config = SwaggerSpec.configure();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}

export default SwaggerSpec;
