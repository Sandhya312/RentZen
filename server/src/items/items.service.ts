import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { item, itemDocument } from './model/item.model';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/createItemDTO';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('item') private readonly itemModel: Model<itemDocument>,
  ) {}

  async getAllItems(): Promise<item[]> {
    const items = await this.itemModel.find({}).exec();
    return items;
  }

  async createItem(createItemDTO: CreateItemDto): Promise<item> {
    const newItem = new this.itemModel(createItemDTO);
    return newItem.save();
  }
}
