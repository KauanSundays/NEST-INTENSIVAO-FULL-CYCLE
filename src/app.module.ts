import { Module, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProcessosController } from './processos/processos.controller';

@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  acao(): string {
    return 'Kauanzito';
  }
}

@Module({
  imports: [],
  controllers: [AppController, ProcessosController],
  providers: [AppService],
})
export class AppModule {}
