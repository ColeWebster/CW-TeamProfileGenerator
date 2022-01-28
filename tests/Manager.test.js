const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")

test("Can instantiate Team Manager instance", () => {
    const e = new TeamManager();
    expect(typeof(e)).toBe("object");
});

test("Can set name via arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Can set id", () => {
    const testValue = 100;
    const e = new Employee("Foo", 1, testValue);
    expect(e.id).toBe(testValue);
})

test("Can set ia arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})