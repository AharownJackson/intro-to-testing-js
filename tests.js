// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it(`should be a defined function`, function() {
      expect(typeof helloWorld).toBe('function');
    });
    it(`should return a string when called`, function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it(`should return the string "Hello, World!" when executed`, function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it(`should never return 'undefined' when called`, function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it(`should be a defined function`, function() {
        expect(typeof sayHello).toBe('function');
    });
    it(`should return a string when called`, function() {
        expect(typeof sayHello()).toBe('string');
    })
    it(`should return "Hello, Jane!" when passed the string "Jane"`, function () {
        expect(sayHello ("Jane")).toBe("Hello, Jane!");
    });
    it(`should return "Hello, Alex!" when passed the string "Alex"`, function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it(`should return "Hello, Pat!" when passed the string "Pat"`, function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it(`should return "Hello, World!" when passed the string "World"`, function () {
        expect(sayHello()).toBe("Hello, World!");
    });
});