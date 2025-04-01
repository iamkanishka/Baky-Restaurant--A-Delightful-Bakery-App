import { Injectable } from '@nestjs/common';
import { CreateGrowthDto } from './dto/create-growth.dto';
import { UpdateGrowthDto } from './dto/update-growth.dto';

@Injectable()
export class GrowthService {
  create(createGrowthDto: CreateGrowthDto) {
    return 'This action adds a new growth';
  }

  findAll() {
    return `This action returns all growth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} growth`;
  }

  update(id: number, updateGrowthDto: UpdateGrowthDto) {
    return `This action updates a #${id} growth`;
  }

  remove(id: number) {
    return `This action removes a #${id} growth`;
  }
}
