"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.btnText = exports.buttons = exports.pricing = void 0;
exports.pricing = {
    '1 День': 99,
    Неделя: 249,
    Месяц: 999,
    Безлимит: 1999,
};
exports.buttons = Object.keys(exports.pricing).map((text) => ({
    text,
}));
exports.btnText = exports.buttons.map(({ text }) => text);
//# sourceMappingURL=buttons.js.map