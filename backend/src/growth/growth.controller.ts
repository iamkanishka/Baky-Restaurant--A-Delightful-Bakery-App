import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrowthService } from './growth.service';
import { CreateGrowthDto } from './dto/create-growth.dto';
import { UpdateGrowthDto } from './dto/update-growth.dto';

@Controller('growth')
export class GrowthController {
  constructor(private readonly growthService: GrowthService) {}

  @Post()
  create(@Body() createGrowthDto: CreateGrowthDto) {
    return this.growthService.create(createGrowthDto);
  }

  @Get()
  findAll() {
    return this.growthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.growthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrowthDto: UpdateGrowthDto) {
    return this.growthService.update(+id, updateGrowthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.growthService.remove(+id);
  }
}
