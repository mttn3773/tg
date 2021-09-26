import { OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
export declare class AppService implements OnModuleInit {
    bot: TelegramBot;
    constructor();
    onModuleInit(): void;
}
