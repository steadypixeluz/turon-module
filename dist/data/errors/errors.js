"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_COUNT = exports.INVALID_PHONE_NUMBER = exports.FILE_SIZE = exports.BAD_FILE = exports.LONG_TIME = exports.CODE_NOT_CORRECT = exports.COMPANY_INN_IN_REVIEW = exports.COMPANY_INN_ALREADY_REGISTERED = exports.CLIENT_ON_REDIS_NOT_FOUND = exports.CLIENT_ALREADY_REGISTERED = exports.CLIENT_ALREADY_REGISTERED_EMAIL = exports.CLIENT_ALREADY_REGISTERED_PHONE_NUMBER = exports.INCORRECT_PASSWORD = exports.CLIENT_WITH_PHONE_NUMBER_NOT_FOUND = exports.CLIENT_WITH_EMAIL_NOT_FOUND = exports.CLIENT_NOT_FOUND = void 0;
exports.CLIENT_NOT_FOUND = {
    uz: 'Bunday elektron pochta yoki telefon raqamiga ega mijoz topilmadi',
    ru: 'Клиент с таким адресом электронной почты или номером телефона не найден',
    en: 'Client with this email address or phone number was not found',
};
exports.CLIENT_WITH_EMAIL_NOT_FOUND = {
    uz: 'Ushbu elektron pochta manziliga ega mijoz topilmadi',
    ru: 'Клиент с таким адресом электронной почты не найден',
    en: 'Сlient with this email address not found',
};
exports.CLIENT_WITH_PHONE_NUMBER_NOT_FOUND = {
    uz: 'Bu telefon raqamiga ega mijoz topilmadi',
    ru: 'Клиент с таким номером телефона не найден',
    en: 'Сlient with this phone number not found',
};
exports.INCORRECT_PASSWORD = {
    uz: "Noto'g'ri parol",
    ru: 'Неправильный пароль',
    en: 'Incorrect password',
};
exports.CLIENT_ALREADY_REGISTERED_PHONE_NUMBER = {
    uz: "Bunday telefon raqamiga ega mijoz allaqachon ro'yxatdan o'tgan",
    ru: 'Клиент с таким номером телефона уже зарегистрирован',
    en: 'Client with such phone number is already registered',
};
exports.CLIENT_ALREADY_REGISTERED_EMAIL = {
    uz: "Bunday elektron pochtaga ega mijoz allaqachon ro'yxatdan o'tgan",
    ru: 'Клиент с таким электронная почта уже зарегистрирован',
    en: 'Client with such e-mail is already registered',
};
exports.CLIENT_ALREADY_REGISTERED = {
    uz: "Bunday telefon raqami yoki elektron pochta manziliga ega mijoz allaqachon ro'yxatdan o'tgan",
    ru: 'Клиент с таким номером телефона или адресом электронной почты уже зарегистрирован',
    en: 'A client with this phone number or email address is already registered',
};
exports.CLIENT_ON_REDIS_NOT_FOUND = {
    uz: "Bu telefon raqami uchun ma'lumot yo'q",
    ru: 'Нет данных по этому номеру телефона',
    en: 'There is no data for this phone number',
};
// ! COMPANY
exports.COMPANY_INN_ALREADY_REGISTERED = {
    uz: "Bu kompaniya INN allaqachon ro'yxatdan o'tgan",
    ru: "Этот ИНН уже зарегистрирован",
    en: "This company INN is already registered",
};
exports.COMPANY_INN_IN_REVIEW = {
    uz: "Ushbu INN raqamiga ega kompaniya hozirda ko'rib chiqilmoqda",
    ru: "Компания с этим ИНН находится на рассмотрении",
    en: "A company with this INN is currently under review",
};
exports.CODE_NOT_CORRECT = {
    uz: "Kod noto'g'ri",
    ru: 'Код неверный',
    en: 'Code not correct',
};
exports.LONG_TIME = {
    uz: "Siz uzoq vaqtdan beri tizimga kirmadingiz, shuning uchun qayta ro'yxatdan o'ting.",
    ru: 'Вы долгое время не заходили в систему, поэтому, пожалуйста, зарегистрируйтесь снова.',
    en: 'You have not logged in for a long time, so please register again.',
};
exports.BAD_FILE = {
    uz: "Fayl turi noto'g'ri",
    ru: 'Неправильный тип файла',
    en: 'Incorrect file type',
};
exports.FILE_SIZE = {
    en: 'File size big',
    ru: 'Размер файла большой',
    uz: 'Fayl hajmi katta',
};
exports.INVALID_PHONE_NUMBER = {
    en: 'Invalid phone number',
    ru: 'Неверный номер телефона',
    uz: "Telefon raqami noto'g'ri",
};
exports.ORDER_COUNT = {
    en: 'Dona sotuvga qolgan',
    ru: 'Осталось в продаже',
    uz: 'Only left in stock',
};
