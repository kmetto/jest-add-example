import add from './add';

describe('add function', () => {
    test('adds two numbers', () => {
        expect(add(2,2)).toBe(4);
    });

    test('adds more than two parameters', () => {
        expect(add(2, 2 ,3)).toBe(7);
    });

    test('throws exception if one of the arguments is not a number', () => {
        expect(() => {
            add(2, 2 ,'qwer');
        }).toThrow('qwer is not a number');
    });

    test('throws exception if one of the arguments is Infinity number', () => {
        expect(() => {
            add(2, 2 , 1/0);
        }).toThrow('one of the arguments is not finite bumber');
    });

    test('throws exception if one of the arguments is NaN number', () => {
        expect(() => {
            add(2, 2 , 'test'/23);
        }).toThrow('one of the arguments is not finite bumber');
    });
});
