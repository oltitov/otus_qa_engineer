export const kolobok = (name: string = ''):string => {
  const nameLowerCase = name.toLowerCase();

  switch (nameLowerCase) {
    case 'дедушка':
      return 'Я от дедушки ушел';
    case 'заяц':
      return 'Я от зайца ушел';
    case 'лица':
      return 'Меня съели';
    default:
      return 'Неизвестный персонаж';
  }
}

console.log(kolobok('Дедушка'));
console.log(kolobok('Заяц'));
console.log(kolobok('Лиса'));
console.log(kolobok('Test'));

export const newYear = (name: string = ''):string => {
  switch (name) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${name}!${name}!${name}!`;
    default:
      return 'Неизвестный персонаж';
  }
}

console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));
console.log(newYear('Test'));
