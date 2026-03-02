import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseUidPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string') {
      throw new BadRequestException('UID param must be a string');
    }

    const uid = Number(value.split('-').pop());

    if (isNaN(uid)) {
      throw new BadRequestException(`Invalid UID format: ${value}`);
    }

    return uid;
  }
}
