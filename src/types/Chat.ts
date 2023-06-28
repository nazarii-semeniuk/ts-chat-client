import  type { Message } from './Message';

export interface Chat {
    id: string;
    name: string;
    description: string;
    image: string;
    messages: Message[];
}