const helloWorld = require('../src/helloworld');

test('returns the string "Hello Josh"', () => {
    expect(helloWorld()).toBe("Hello Josh");
});

