import { KeyboardButton } from 'node-telegram-bot-api';

export const pricing = {
  '1 День': 99,
  Неделя: 249,
  Месяц: 999,
  Безлимит: 1999,
};

export const buttons: KeyboardButton[] = Object.keys(pricing).map((text) => ({
  text,
}));
export const btnText = buttons.map(({ text }) => text);
