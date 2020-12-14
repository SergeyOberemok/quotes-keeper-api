import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { QuoteDto } from '../dto';

export type QuoteDocument = Quote & Document;

@Schema()
export class Quote implements QuoteDto {
  id: string;
  @Prop()
  author: string;
  @Prop({ required: true })
  phrase: string;
  @Prop({ required: true })
  createdAt: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
