import { mapResponseObject, mapResponseArray } from '../helpers';

class User {
  name: string = null;

  constructor(name: string = null) {
    this.name = name;
  }
}

class Contractor extends User {
  company: string;

  constructor(name: string = null, company: string = null) {
    super(name);
    this.company = company;
  }
}

describe('@helpers', () => {
  describe('mapResponseObject', () => {
    it('should map object correctly', () => {
      const response: any = {
        name: 'Test',
        age: 25,
      };
      const userExpected = new User('Test');
      const result = mapResponseObject<User>(response)(User);
      expect(result).toEqual(userExpected);
      expect(result instanceof User).toBe(true);
    });

    it('should map object correctly if response has no some properties', () => {
      const response: any = {
        name: 'Test',
        age: 25,
      };
      const userExpected = new Contractor('Test');
      const result = mapResponseObject<Contractor>(response)(Contractor);
      expect(result).toEqual(userExpected);
      expect(result instanceof Contractor).toBe(true);
    });

    it('should thrown an error if the class is invalid', () => {
      expect(mapResponseObject({})).toThrow();
    });
  });

  describe('mapResponseArray', () => {
    it('should map Array correctly', () => {
      const response: any[] = [
        {
          name: 'Test',
          age: 25,
        },
        {
          name: 'User',
          age: 31,
        }
      ];
      const usersExpected = [
        new User('Test'),
        new User('User'),
      ];
      const result = mapResponseArray<User>(response)(User);
      expect(result).toEqual(usersExpected);
      result.forEach((user) => {
        expect(user instanceof User).toBe(true);
      });
    });
  });
});
