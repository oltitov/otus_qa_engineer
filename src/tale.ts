export const kolobok = (name: string = ''):string => {
  const nameLowerCase = name.toLowerCase();

  switch (nameLowerCase) {
    case 'дедушка':
      return 'Я от дедушки ушел';
    case 'заяц':
      return 'Я от зайца ушел';
    case 'лиса':
      return 'Меня съели';
    default:
      return 'Неизвестный персонаж';
  }
}

export const newYear = (name: string = ''):string => {
  switch (name) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${name}! ${name}! ${name}!`;
    default:
      return 'Неизвестный персонаж';
  }
}
