import { QuoteDto } from '../dto';

export class Quote implements QuoteDto {
  id: string;
  author = '';
  phrase = '';
  createdAt = new Date().toISOString();
}
