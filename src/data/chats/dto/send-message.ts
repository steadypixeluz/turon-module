export class SendMessageDto {
  chatId: string;
  senderId: string;

  type: 'text' | 'image' | 'voice';

  text?: string;
  mediaUrl?: string;
}
