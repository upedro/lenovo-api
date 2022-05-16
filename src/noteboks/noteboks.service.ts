import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteboksService {
  create(createNotebokDto: any) {
    return 'This action adds a new notebok';
  }

  findAll() {
    return `This action returns all noteboks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notebok`;
  }

  update(id: number, updateNotebokDto: any) {
    return `This action updates a #${id} notebok`;
  }

  remove(id: number) {
    return `This action removes a #${id} notebok`;
  }
}
