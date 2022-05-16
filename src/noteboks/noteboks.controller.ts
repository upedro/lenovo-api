import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteboksService } from './noteboks.service';

@Controller('noteboks')
export class NoteboksController {
  constructor(private readonly noteboksService: NoteboksService) {}

  @Post()
  create(@Body() createNotebokDto: any) {
    return this.noteboksService.create(createNotebokDto);
  }

  @Get()
  findAll() {
    return this.noteboksService.findAll();
  }
}
