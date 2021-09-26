import { Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { btnText, buttons, pricing } from './config/buttons';
import { BOT_TOKEN, REQUISITES } from './config/main';
@Injectable()
export class AppService implements OnModuleInit {
  bot: TelegramBot;
  constructor() {
    this.bot = new TelegramBot(BOT_TOKEN, { polling: true });
  }
  onModuleInit() {
    this.bot.on('message', (m) => {
      if (btnText.includes(m.text)) {
        this.bot.sendMessage(m.chat.id, `₽${pricing[m.text]} ${REQUISITES}`);
      } else {
        this.bot.sendMessage(m.chat.id, 'Keyboard', {
          reply_markup: {
            keyboard: [buttons],
          },
        });
      }
    });
  }
}
