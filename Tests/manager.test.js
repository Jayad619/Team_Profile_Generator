const Manager = require("../Library/manager")

describe("Creates a Manager", () => {
    it ("Manager name should get printed", () => {
        const name = "Jayad";
        const Emp = new Manager(name);
        expect(Emp.name).toBe(name);
    })

    it ("Manager id gets printed", () => {
        const id = "1";
        const Emp = new Manager("Jayad", id);
        expect(Emp.id).toBe(id);
    })

    it ("Manager email gets printed", () => {
        const email = "jayad@gmail.com";
        const Emp = new Manager("Jayad", "1", email);
        expect(Emp.email).toBe(email);
    })

    it ("Manager number gets printed", () => {
        const officeNumber = "1";
        const Emp = new Manager("Jayad", "1", "jayad@gmail.com", officeNumber);
        expect(Emp.getOfficeNumber()).toBe(officeNumber);
    })
})