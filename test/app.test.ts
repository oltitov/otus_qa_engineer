import { nameIsValid, fullTrim, getTotal } from '../src/app';

describe('check nameIsValid function', () => {
  test.each([
    ['oleg', true],
    [123, false],
    ['o', false],
    ['oleg-titov', false],
  ])('%s it name %s', (a, expected) => {
    expect(nameIsValid(a)).toBe(expected);
  });
});

describe('check fullTrim function', () => {
  test.each([
    ['oleg', 'oleg'],
    [' oleg ', 'oleg'],
    [' ol eg ', 'oleg'],
    [' oleg-titov ', 'oleg-titov'],
  ])('%s = %s', (a, expected) => {
    expect(fullTrim(a)).toBe(expected);
  });
});

describe('check getTotal function', () => {
  const order = [
    {
      price: 10,
      quantity: 10
    },
    {
      price: 100,
      quantity: 10
    },
  ];

  test(`products no discount`, () => {
    expect(getTotal(order)).toBe(1100);
  });

  test('products discount', () => {
    expect(getTotal(order, 10)).toBe(990);
  });

  test('discount negative number', () => {
    expect(() => getTotal(order, -10)).toThrow();
  });

  test('discount > 100%', () => {
    expect(() => getTotal(order, 1000)).toThrow();
  });
});
