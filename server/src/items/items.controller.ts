import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get('all')
  @HttpCode(200)
  async getAllItems(): Promise<any> {
    return this.itemService.getAllItems();
  }

  @Post('create')
  @HttpCode(201)
  async createItem(@Body() itemData): Promise<any> {
    return this.itemService.createItem(itemData);
  }
}
