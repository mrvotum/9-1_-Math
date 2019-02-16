import { Magician, Daemon } from '../src/js/creatingCharacter';

test('Magician, Stoned off', () => {
  const inputCharacter = new Magician('Rick');

  const expected = 60; // ожидает 'атаку' = 60

  inputCharacter.attackTo = 5;

  const received = inputCharacter._attack; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Magician, Stoned on', () => {
  const inputCharacter = new Magician('Rick');

  const expected = 85; // ожидает 'атаку'

  inputCharacter.stonedMode = true;
  inputCharacter.attackTo = 2;

  const received = inputCharacter._attack; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Daemon, Stoned on', () => {
  const inputCharacter = new Daemon('Rick');

  const expected = 4; // ожидает 'атаку'

  inputCharacter.stonedMode = true;
  inputCharacter.attackTo = 9;

  const received = inputCharacter._attack; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Daemon, Stoned on, checking stonedMode', () => {
  const inputCharacter = new Daemon('Rick');

  inputCharacter.stonedMode = true;
  const expected = true; // ожидает

  const received = inputCharacter.stonedMode; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Magician, Stoned off, distance > 10 = error', () => {
  const inputCharacter = new Magician('Rick');

  const received = () => inputCharacter.attackTo = 14; // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});
