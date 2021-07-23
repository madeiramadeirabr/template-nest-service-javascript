import { APP_NAME, APP_VERSION } from './main';
import { Controller, Get, Header } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  index() {
    return { app: `${APP_NAME}:${APP_VERSION}` };
  }
}
