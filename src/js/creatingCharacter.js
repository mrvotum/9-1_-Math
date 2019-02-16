class creatingCharacter {
  constructor(name) {
    this.name = name;
    this.attack = 100;
    this._attack = 0; // Внутряняя атака
    this.stoned = false;
  }

  set attackTo(coord) {
    if (coord >= 10) { // тк на 10-ой клетке атака = 0%
      throw TypeError('Дальность атаки ограничена');
    }
    // затухание атаки:
    this._attack = this.attack - this.attack * (0.1 * (coord - 1));
    if (this.stoned === true) {
      this._attack = this._attack - Math.round(Math.log2(coord) * 5);
    }
  }

  set stonedMode(turn) {
    if (turn === true) {
      this.stoned = true;
    }
  }

  get stonedMode() {
    return this.stoned;
  }
}

class Magician extends creatingCharacter {
  constructor(name, attack, stoned) {
    super(name, attack, stoned);
    this.type = 'Magician';
  }
}

class Daemon extends creatingCharacter {
  constructor(name, attack, stoned) {
    super(name, attack, stoned);
    this.type = 'Daemon';
  }
}

export { Magician, Daemon };
