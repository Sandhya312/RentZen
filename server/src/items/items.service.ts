import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { item, itemDocument } from './model/item.model';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/createItemDTO';
import { UpdateItemDto } from './dto/updateItemDTO';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('item') private readonly itemModel: Model<itemDocument>,
  ) {}

  async getAllItems(): Promise<item[]> {
    const items = await this.itemModel.find({}).exec();
    return items;
  }

  async createItem(createItemDTO: CreateItemDto): Promise<string> {
    //check if item already exists
    const itemExists = await this.itemModel.findOne({
      name: createItemDTO.name,
      imageURL: createItemDTO.imageURL,
    });
    if (itemExists) {
      return 'Item already exists';
    }
    //create item and also handle error if any
    const newItem = new this.itemModel(createItemDTO);
    const result = await newItem.save();
    if (!result) {
      return 'something went wrong';
    }
    return 'Item created successfully';
  }

  async updateItem(itemID: string, itemData: UpdateItemDto): Promise<string> {
    const updatedItem = await this.itemModel.findByIdAndUpdate(
      itemID,
      {
        ...itemData,
      },
      { new: true },
    );
    const result = await updatedItem.save();
    if (!result) {
      return 'something went wrong';
    }
    return 'Item created successfully';
  }
}
