// Test Employee
const Employee = require("../lib/Employee");

test('Whatever we make from Employee has to be an object', () => {
    const testObj = new Employee()

    expect(typeof(testObj)).toBe("object")
})

test("I should be able to get a name back when using the getName function", () => {
    const testObj = new Employee("Adina");

    expect(testObj.getName()).toBe(testObj.name)
})