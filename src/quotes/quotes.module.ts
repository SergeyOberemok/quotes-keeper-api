import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote as QuoteModel, QuoteSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: QuoteModel.name, schema: QuoteSchema }]),
  ],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
