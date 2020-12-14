import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService
          .get<string>('DATABASE_URI')
          .replace('<dbname>', configService.get<string>('DATABASE_NAME'))
          .replace('<username>', configService.get<string>('DATABASE_USER'))
          .replace(
            '<password>',
            configService.get<string>('DATABASE_PASSWORD'),
          );

        return { uri };
      },
      inject: [ConfigService],
    }),
    QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
