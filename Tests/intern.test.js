const Intern = require("../Library/itern")

describe("Creates an Intern", () => {
    it ("Intern name gets printed", () => {
        const name = "Amina";
        const Emp = new Intern(name);
        expect(Emp.name).toBe(name);
    })

    it ("Intern id gets printed", () => {
        const id = "3";
        const Emp = new Intern("Amina", id);
        expect(Emp.id).toBe(id);
    })

    it ("Intern email gets printed", () => {
        const email = "amina@gmail.com";
        const Emp = new Intern("Amina", "3", email);
        expect(Emp.email).toBe(email);
    })

    it ("Intern school gets printed", () => {
        const school = "Matthew boulton";
        const Emp = new Intern("Amina", "3", "amina@gmail.com", school);
        expect(Emp.getSchool()).toBe(school);
    })
})