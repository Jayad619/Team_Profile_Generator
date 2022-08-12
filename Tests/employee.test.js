const Employee = require ('../Library/employee');


describe("Creates an Employee", () => {
    it ("Employee name should get printed", () => {
        const name = "Jayad";
        const Emp = new Employee(name);
        expect(Emp.name).toBe(name);
    })

    it ("Employee id gets printed", () => {
        const id = "1";
        const Emp = new Employee("Jayad", id);
        expect(Emp.id).toBe(id);
    })

    it ("Employee email gets printed", () => {
        const email = "jayad@gmail.com";
        const Emp = new Employee("Jayad", "1", email);
        expect(Emp.email).toBe(email);
    })
})