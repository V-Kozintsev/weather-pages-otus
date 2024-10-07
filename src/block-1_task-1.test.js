import { sum, multiply } from './block-1_task-1';

describe('Тестирование функций суммирования и умножения', () => {
  it('Проверка суммирования двух чисел', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 4)).toBe(3);
    expect(sum(0, 4)).toBe(4);
  });
  it('Проверка умножения двух чисел', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(-1, -1)).toBe(1);
  });
});
