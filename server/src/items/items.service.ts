import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { item, itemDocument } from './item.model';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('item') private readonly itemModel: Model<itemDocument>,
  ) {}

  async getAllItems(): Promise<item[]> {
    const items = await this.itemModel.find({}).exec();
    return items;
  }
}
