export default class ErrorRepository {
  constructor() {
    this.table = new Map([
      [404, 'Ничего не найдено'],
      [224, 'В команде уже есть этот персонаж'],
      [196, 'Нет такой настройки'],
    ]);
  }

  translate(code) {
    if (this.table.has(code)) {
      return this.table.get(code);
    }
    return 'Unknown error!';
  }
}
