import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DivisionsService } from './divisions.service';
import { CreateDivisionDto, UpdateDivisionDto } from './division.dto';

@Controller('divisions')
export class DivisionsController {
  constructor(private readonly divisionsService: DivisionsService) {}

  @Post()
  create(@Body() createDivisionDto: CreateDivisionDto) {
    return this.divisionsService.create(createDivisionDto);
  }

  @Get()
  findAll() {
    return this.divisionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisionsService.findOne(+id);
  }

  @Get(':id/subdivisions')
  findSubdivisions(@Param('id') id: string) {
    return this.divisionsService.findSubdivisions(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDivisionDto: UpdateDivisionDto) {
    return this.divisionsService.update(+id, updateDivisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisionsService.remove(+id);
  }
}