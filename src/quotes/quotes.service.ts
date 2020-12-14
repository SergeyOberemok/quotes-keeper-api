import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto';
import { CreateQuoteDto, UpdateQuoteDto } from './dto';
import { Quote as QuoteModel, QuoteDocument } from './schemas';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(QuoteModel.name) private quoteModel: Model<QuoteDocument>,
  ) {}

  public async create(createQuoteDto: CreateQuoteDto): Promise<QuoteModel> {
    const createdQuote = new this.quoteModel(createQuoteDto);

    return createdQuote.save();
  }

  public async findAll({
    offset = 0,
    limit = 10,
  }: PaginationQueryDto): Promise<QuoteModel[]> {
    return this.quoteModel.find().skip(offset).limit(limit).exec();
  }

  public async findOne(id: string): Promise<QuoteModel> {
    const quote = await this.quoteModel.findById({ _id: id }).exec();

    if (!quote) {
      throw new NotFoundException(`Quote #${id} not found`);
    }

    return quote;
  }

  public async update(
    id: string,
    updateQuoteDto: UpdateQuoteDto,
  ): Promise<QuoteModel> {
    const existingQuote = await this.quoteModel.findByIdAndUpdate(
      { _id: id },
      updateQuoteDto,
      { new: true, useFindAndModify: false },
    );

    if (!existingQuote) {
      throw new NotFoundException(`Quote #${id} not found`);
    }

    return existingQuote;
  }

  public async remove(id: string): Promise<string> {
    const deletedQuote = await this.quoteModel.findByIdAndDelete(
      {
        _id: id,
      },
      { useFindAndModify: false },
    );

    if (!deletedQuote) {
      throw new NotFoundException(`Quote #${id} not found`);
    }

    return Promise.resolve(id);
  }
}
