import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateDivisionDto, UpdateDivisionDto } from './division.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DivisionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDivisionDto) {
    try {
      return await this.prisma.division.create({
        data,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Division name must be unique');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.division.findMany({
      include: {
        parentDivision: true,
        subDivisions: true,
      },
    });
  }

  async findOne(id: number) {
    const division = await this.prisma.division.findUnique({
      where: { id },
      include: {
        parentDivision: true,
        subDivisions: true,
      },
    });

    if (!division) {
      throw new NotFoundException(`Division with ID ${id} not found`);
    }

    return division;
  }

  async findSubdivisions(id: number) {
    const division = await this.prisma.division.findUnique({
      where: { id },
      include: {
        subDivisions: true,
      },
    });

    if (!division) {
      throw new NotFoundException(`Division with ID ${id} not found`);
    }

    return division.subDivisions;
  }

  async update(id: number, data: UpdateDivisionDto) {
    try {
      return await this.prisma.division.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Division with ID ${id} not found`);
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Division name must be unique');
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.division.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Division with ID ${id} not found`);
      }
      throw error;
    }
  }
}