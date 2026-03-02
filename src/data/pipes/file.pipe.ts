import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
const types = [
  'video/mp4',
  'video/mpeg',
  'video/ogg',
  'video/webm',
  'image/apng',
  'image/avif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, typesmetadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    if (value.size > 10) {
      throw new HttpException(
        { message: 'File size big', statusCode: 422 },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!types.includes(value.mimetype)) {
      throw new HttpException(
        { message: 'Bad file type', statusCode: 415 },
        HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      );
    }
    return true;
  }
}
