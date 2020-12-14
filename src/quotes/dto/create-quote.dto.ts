import { QuoteDto } from './quote.dto';

export class CreateQuoteDto implements Omit<QuoteDto, 'id'> {
  author: string;
  phrase: string;
  createdAt: string;
}
