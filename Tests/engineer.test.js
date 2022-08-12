const Engineer = require("../Library/engineer")

describe("Create an Engineer", () => {
    it ("Engineer name should get printed", () => {
        const name = "Bader";
        const Emp = new Engineer(name);
        expect(Emp.name).toBe(name);
    })

    it ("Engineer id gets printed", () => {
        const id = "2";
        const Emp = new Engineer("Bader", id);
        expect(Emp.id).toBe(id);
    })

    it ("Engineer email gets printed", () => {
        const email = "bader@gmail.com";
        const Emp = new Engineer("Bader", "2", email);
        expect(Emp.email).toBe(email);
    })

    
    it ("Engineer github username gets printed", () => {
        const github = "sara33";
        const Emp = new Engineer("Bader", "2", "bader@gmail.com", github);
        expect(Emp.getGithub()).toBe(github);
    })
})