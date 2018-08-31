import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = [
      { id: 11, name: 'Samsung' },
      { id: 12, name: 'Apple' },
      { id: 13, name: 'LG' },
      { id: 14, name: 'Motorola' },
      { id: 15, name: 'Nokia' },
      { id: 16, name: 'Huawei' },
      { id: 17, name: 'Asus' },
      { id: 18, name: 'Xiami' },
      { id: 19, name: 'AZT' },
      { id: 20, name: 'RedmiOne' }
    ];
    return {phones};
  }
}