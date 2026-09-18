export type SlideMeta = {
  id: number;
  eyebrow: string;
  navLabel: string;
};

export const slides: SlideMeta[] = [
  { id: 1, eyebrow: 'Кабинет партнёра', navLabel: 'Введение' },
  { id: 2, eyebrow: 'Ситуация в продаже', navLabel: 'Барьер цены' },
  { id: 3, eyebrow: 'Процесс', navLabel: 'Как это работает' },
  { id: 4, eyebrow: 'Ценность', navLabel: 'Что получает магазин' },
  { id: 5, eyebrow: 'Рабочий контекст', navLabel: 'Заявки в кабинете' },
  { id: 6, eyebrow: 'Следующий шаг', navLabel: 'Подключение' },
];

export const riskScenarios = [
  { icon: 'close', title: 'Отказаться от покупки', detail: '«Не буду покупать сейчас»' },
  { icon: 'clock', title: 'Перенести покупку', detail: '«Вернусь позже»' },
  { icon: 'coins', title: 'Выбрать дешевле', detail: 'Снизить стоимость покупки' },
  { icon: 'box', title: 'Сократить заказ', detail: 'Убрать часть товаров' },
] as const;

export const processSteps = [
  { number: '01', title: 'Выбран товар' },
  { number: '02', title: 'Заявка в кабинете' },
  { number: '03', title: 'Рассмотрение Fincode' },
  { number: '04', title: 'Статус виден продавцу' },
  { number: '05', title: 'Оформление сделки' },
];

export const benefits = [
  { number: '01', title: 'Ещё один вариант для клиента', text: 'Когда полной суммы сейчас недостаточно.' },
  { number: '02', title: 'Контроль заявок', text: 'Статусы сделок собраны в одном месте.' },
  { number: '03', title: 'Меньше ручного сопровождения', text: 'Продавцу не нужно выяснять ход сделки по разным каналам.' },
  { number: '04', title: 'Поддержка Fincode', text: 'Персональный менеджер помогает по процессу.' },
];

export const applications = [
  { id: '104258731', product: 'Холодильник', amount: '3 200 BYN', status: 'Одобрена', tone: 'approved' },
  { id: '104258730', product: 'Садовая техника', amount: '5 850 BYN', status: 'В работе', tone: 'progress' },
  { id: '104258729', product: 'Баня-бочка', amount: '[сумма]', status: 'Новая', tone: 'new' },
] as const;

export const launchSteps = [
  { number: '01', title: 'Знакомимся', text: 'Ассортимент и точки продаж' },
  { number: '02', title: 'Согласуем', text: 'Условия сотрудничества' },
  { number: '03', title: 'Подключаем', text: 'Кабинет и сотрудников' },
  { number: '04', title: 'Запускаем', text: 'Первые заявки' },
];
