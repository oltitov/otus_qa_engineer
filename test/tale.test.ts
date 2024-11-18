import { kolobok, newYear } from '../src/tale';

describe('kolobok function', () => {
  it('should return the correct response for дедушка', () => {
    const result = kolobok('дедушка');
    expect(result).toBe('Я от дедушки ушел');
  })

  it('should return the correct response for заяц', () => {
    const result = kolobok('заяц');
    expect(result).toBe('Я от зайца ушел');
  })

  it('should return the correct response for лиса', () => {
    const result = kolobok('лиса');
    expect(result).toBe('Меня съели');
  })

  it('should return the correct response for unknown character', () => {
    const result = kolobok('Test');
    expect(result).toBe('Неизвестный персонаж');
  })
})

describe('newYear function', () => {
  it('should return the correct response for Дед Мороз', () => {
    const result = newYear('Дед Мороз');
    expect(result).toBe('Дед Мороз! Дед Мороз! Дед Мороз!');
  })

  it('should return the correct response for Снегурочка', () => {
    const result = newYear('Снегурочка');
    expect(result).toBe('Снегурочка! Снегурочка! Снегурочка!');
  })

  it('should return the correct response for unknown character', () => {
    const result = newYear('Неизвестный');
    expect(result).toBe('Неизвестный персонаж');
  })
});
